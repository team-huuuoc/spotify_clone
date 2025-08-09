import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FollowType } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFollowDto } from './dto/create-follow.dto';

@Injectable()
export class FollowService {
  constructor(private readonly prismaService: PrismaService) {}

  public async follow(userId: number, dto: CreateFollowDto) {
    if (dto.type === FollowType.ARTIST) {
      await this.prismaService.artist.findUnique({
        where: { id: dto.targetId },
      });
      // } else if (dto.type === FollowType.PLAYLIST) {
      //   targetExists = await this.prismaService.playlist.findUnique({
      //     where: { id: targetId.toString() },
      //   });
      // } else if (dto.type === FollowType.ALBUM) {
      //   await this.prismaService.album.findUnique({
      //     where: { id: dto.targetId },
      //   });
      // }
      // Kiểm tra đã follow chưa
      const existing = await this.prismaService.follow.findFirst({
        where: { userId, targetId: dto.targetId, type: dto.type },
      });
      if (existing) {
        throw new BadRequestException(`Already following this ${dto.type}`);
      }
      return this.prismaService.follow.create({
        data: { userId, targetId: dto.targetId, type: dto.type },
      });
    }

    //   async unfollowArtist(userId: string, artistId: string) {
    //     return this.prismaService.follow.delete({
    //       where: {
    //         userId_artistId: {
    //           userId,
    //           artistId,
    //         },
    //       },
    //     });
    //   }
  }
  public async getLibrary(userId: number) {
    return await this.prismaService.follow.findMany({
      where: { userId },
    });
  }
}
