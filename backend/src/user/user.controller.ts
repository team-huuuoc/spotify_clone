import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { PaginationDto } from './dto/pagination.dto';
import {
  RequestUser,
  User,
} from 'src/common/decorators/request.user.decorator';
import { StandardResponse } from 'src/response/StandardResponse';
import { AppMessage } from 'src/response/AppMessage';
import { ForbiddenError, UnauthorizedError } from 'src/response/HttpErrors';
import { ErrorCode } from 'src/response/ErrorCode';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get('profile')
  public async getProfile(@User() user: RequestUser) {
    const data = await this.userService.getProfile(user.id);
    const response: StandardResponse = {
      success: true,
      code: HttpStatus.OK,
      message: AppMessage.SUCCESS_RESPONSE,
      data,
    };
    return response;
  }
  @Get(':id')
  public async getUserById(@Param('id', ParseIntPipe) id) {
    return await this.userService.getUserById(id);
  }
}
