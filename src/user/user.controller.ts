import { Body, Controller, Delete, Get, Param } from '@nestjs/common';
import { IUser, users } from 'src/user/mock';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUsers():IUser[] {
    return this.userService.getAll()
  }

  @Get(":id")
  getUserById(@Param('id') id:string):IUser {
    return this.userService.getOne(id)
  }

  @Delete("/delete")
  deleteUser(@Body() data:{id:string, adminId:string}):string {
    return this.userService.deleteUser(data.id, data.adminId)
  }
}
