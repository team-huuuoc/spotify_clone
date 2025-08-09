import {
  Controller,
  Post,
  Delete,
  Get,
  Param,
  Req,
  UseGuards,
  Body,
} from '@nestjs/common';
import { FollowService } from './follow.service';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  RequestUser,
  User,
} from 'src/common/decorators/request.user.decorator';
import { CreateFollowDto } from './dto/create-follow.dto';

@Controller('follow')
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  // Follow artist
  @UseGuards(AuthGuard)
  @Post('')
  async follow(@User() user: RequestUser, @Body() dto: CreateFollowDto) {
    return this.followService.follow(user.id, dto);
  }

  // Unfollow artist
  // @Delete('artist/:artistId')
  // async unfollowArtist(@Param('artistId') artistId: string, @Req() req: any) {
  //   const userId = req.user.id;
  //   return this.followService.unfollowArtist(userId, artistId);
  // }

  @Get('get-library')
  async getLibrary(@User() user: RequestUser) {
    return this.followService.getLibrary(user.id);
  }
}
