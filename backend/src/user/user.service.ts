import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { PaginationDto } from "./dto/pagination.dto";
import { UnauthorizedError } from "src/response/HttpErrors";
import { ErrorCode } from "src/response/ErrorCode";

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getAllUser(pagination: PaginationDto) {
    return await this.prismaService.user.findMany({
      skip: pagination.skip,
      take: pagination.limit || 10,
    });
  }
  public async getUserById(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new UnauthorizedError(ErrorCode.DATA_NOT_FOUND);
    }
    return user;
  }
  public async delete(userId: number) {
    return await this.prismaService.user.delete({
      where: { id: userId },
    });
  }
  public async getUserByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });
    return user;
  }
  public async updateUserAvatar(userId: number, avatarUrl: string) {
    return await this.prismaService.user.update({
      where: { id: userId },
      data: {
        avatar: avatarUrl,
      },
    });
  }
}
