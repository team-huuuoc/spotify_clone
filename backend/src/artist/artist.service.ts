import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { buildPaginationQuery } from 'src/common/helpers/pagination.helper';
import { PrismaService } from 'src/prisma/prisma.service';
import { SpotifyService } from 'src/spotify/spotify.service';

@Injectable()
export class ArtistService {
  private readonly logger = new Logger(ArtistService.name);

  constructor(
    private readonly spotifyService: SpotifyService,
    private readonly prismaService: PrismaService,
  ) {}
  // @Cron(CronExpression.EVERY_10_MINUTES)
  async saveArtistFromSpotify() {
    this.logger.log('Bắt đầu đồng bộ artists từ Spotify...');
    const playlistId = '6XFOsAdp88ptBCdqUMAfmP';
    const playlistData = await this.spotifyService.fetchFromSpotify(
      `playlists/${playlistId}/tracks`,
    );
    //  Lọc ra các nghệ sĩ duy nhất
    const artistMap = new Map<string, any>();
    for (const item of playlistData.items) {
      const artists = item.track.artists;
      artists.forEach((artist) => {
        if (!artistMap.has(artist.id)) {
          artistMap.set(artist.id, {
            id: artist.id,
            name: artist.name,
            uri: artist.uri,
            externalUrl: artist.external_urls?.spotify,
          });
        }
      });
    }

    const artistList = Array.from(artistMap.values());
    const artistIds = artistList.map((a) => a.id);
    this.logger.log(`Found ${artistIds.length} unique artists`);
    for (const artistId of artistIds) {
      try {
        const artistData = await this.spotifyService.fetchFromSpotify(
          `artists/${artistId}`,
        );

        await this.prismaService.artist.upsert({
          where: { id: artistData.id },
          update: {
            name: artistData.name,
            totalFollowers: artistData.followers.total,
            genres: artistData.genres,
            uri: artistData.uri,
            externalUrl: artistData.external_urls?.spotify || null,
          },
          create: {
            id: artistData.id,
            name: artistData.name,
            totalFollowers: artistData.followers.total,
            genres: artistData.genres,
            uri: artistData.uri,
            externalUrl: artistData.external_urls?.spotify || null,
          },
        });
      } catch (err) {
        this.logger.error(`❌ Lỗi đồng bộ artist ${artistId}`, err.message);
      }
    }

    this.logger.log('Hoàn thành cron đồng bộ artists.');
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
