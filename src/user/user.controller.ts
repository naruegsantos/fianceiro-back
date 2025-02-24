import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './types';
import { Prisma, User } from '@prisma/client';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Get()
  getUsers():Prisma.PrismaPromise<User[]> {
    return this.userService.getAll()
  }

  @Get("/:id")
  getUserById(@Param('id') id:string) {
    if(id) return this.userService.getOne({id: Number(id)})
  }

  @Delete("/delete")
  deleteUser(): string {
    return "Delete is permited only through the database"
  }

  @Post("/post")
  createUser(@Body() data: User): Promise<string | Promise<User>> {
    return this.userService.createUser(data)
  }

  @Put("/put")
  updateUser(@Body() data: {data:Prisma.UserUpdateInput, where:{id:number}}) {
    return this.userService.updateUser(data)
  }
}
