import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
    return "Delete is permited only  through the database"
  }
  
  @Post("/post")
  createUser(@Body() data:IUser):string {
    return this.userService.createUser(data)
  }

  @Put("/put")
  updateUser(@Body() data:IUser):string {
    return this.userService.updateUser(data)
  }
}
