import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Get()
  getUsers():Prisma.PrismaPromise<User[]> {
    return this.userService.getAll()
  }

  @Get("/:id")
  getUserById(@Param('id') id:string) {
    return this.userService.getOne({id: Number(id)})
  }

  @Delete("/delete")
  deleteUser(): string {
    return "Delete is permited only through the database"
  }

  @Post("/post")
  createUser(@Body() data:Prisma.UserCreateInput): Promise<string | Promise<User>> {
    return this.userService.createUser(data)
  }

  @Put("/put")
  updateUser(@Body() data: {data:Prisma.UserUpdateInput, where:{id:number}}) {
    return this.userService.updateUser(data)
  }
}
