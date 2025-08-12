import { Injectable, Param } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios from 'axios';
import { buildPaginationQuery } from 'src/common/helpers/pagination.helper';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlbumService {
  constructor(private readonly prismaService: PrismaService) {}
  //   @Cron(CronExpression.EVERY_5_MINUTES)
  async fetchAlbums() {
    try {
      const listArtist = await this.prismaService.artist.findMany();
      for (const artist of listArtist) {
        const res = await axios.get(
          'https://api.jamendo.com/v3.0/artists/albums',
          {
            params: {
              client_id: process.env.JAMENDO_CLIENT_ID,
              format: 'json',
              name: artist.name,
            },
          },
        );
        const results = res.data.results;
        if (!results.length) continue;

        const albums = results[0]?.albums || [];
        for (const album of albums) {
          await this.prismaService.album.upsert({
            where: { id: album.id },
            update: {
              name: album.name,
              artistId: artist.id,
              releasedate: album.releasedate
                ? new Date(album.releasedate)
                : null,
              image: album.image || null,
            },
            create: {
              id: album.id,
              name: album.name,
              artistId: artist.id,
              releasedate: album.releasedate
                ? new Date(album.releasedate)
                : null,
              image: album.image || null,
            },
          });
        }
      }
    } catch (error) {}
  }
  public async getList(page: number, limit: number, search: string) {
    const query = buildPaginationQuery(page, limit);
    const [data, total] = await Promise.all([
      this.prismaService.album.findMany(query),
      this.prismaService.album.count({ where: query.where }),
    ]);
    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  }
}
