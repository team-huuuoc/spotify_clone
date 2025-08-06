import { Controller, Delete, Get, Param, ParseIntPipe, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { PaginationDto } from "./dto/pagination.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  public async getUserById(@Param("id", ParseIntPipe) id) {
    return await this.userService.getUserById(id);
  }
  @Get("")
  public async getAllUser(@Query() pagnation: PaginationDto) {
    return await this.userService.getAllUser(pagnation);
  }
  @Delete()
  public async delete(id: number) {
    return await this.userService.delete(id);
  }
}
