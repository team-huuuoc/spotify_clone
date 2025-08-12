import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios from 'axios';
import { buildPaginationQuery } from 'src/common/helpers/pagination.helper';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArtistService {
  constructor(private readonly prismaService: PrismaService) {}

  //   @Cron(CronExpression.EVERY_5_MINUTES)
  async fetchArtists() {
    try {
      const res = await axios.get('https://api.jamendo.com/v3.0/artists', {
        params: {
          client_id: process.env.JAMENDO_CLIENT_ID,
          format: 'json',
          limit: 50,
          offset: 0,
        },
      });

      const artists = res.data.results;

      for (const a of artists) {
        const infoRes = await axios.get(
          'https://api.jamendo.com/v3.0/artists/musicinfo',
          {
            params: {
              client_id: process.env.JAMENDO_CLIENT_ID,
              format: 'json',
              name: a.name,
            },
          },
        );

        const musicinfo = infoRes.data.results?.[0]?.musicinfo || {};
        const tags = musicinfo.tags || [];
        const descriptionEn = musicinfo.description?.en || null;
        await this.prismaService.artist.upsert({
          where: { id: a.id },
          update: {
            name: a.name,
            website: a.website || null,
            joindate: a.joindate ? new Date(a.joindate) : null,
            image: a.image || null,
            tags: tags,
            description: descriptionEn,
          },
          create: {
            id: a.id,
            name: a.name,
            website: a.website || null,
            joindate: a.joindate ? new Date(a.joindate) : null,
            image: a.image || null,
            tags: tags,
            description: descriptionEn,
          },
        });
      }

      console.log(`✅ Đã lưu ${artists.length} artists vào DB`);
    } catch (error) {
      console.error('❌ Lỗi khi fetch artists:', error.message);
    }
  }
  public async getList(page: number, limit: number, search: string) {
    const query = buildPaginationQuery(
      page,
      limit,
      search,
      'name',
      'name',
      'asc',
    );
    const [data, total] = await Promise.all([
      this.prismaService.artist.findMany(query),
      this.prismaService.artist.count({ where: query.where }),
    ]);

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}
