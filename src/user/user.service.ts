import { Inject, Injectable } from '@nestjs/common';
import { IUser, users } from './types';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prismaClient: PrismaService) {} 

  private users: IUser[] = users;
  getAll(){
    return this.prismaClient.user.findMany()
  }

  getOne(id:string): IUser {
    const data = this.users.find((i) => i.id == +id)
    if(!data) throw new Error('not found')

    return data
  }




  createUser(data:Prisma.UserCreateInput):string | Promise<User> {
    try {
      if(this.users.find((i) =>i.email == data.email )) throw new Error(`a user with this email already exists ${JSON.stringify(data)}`)
      let newUser = this.prismaClient.user.create({data})
      console.log(newUser);
      
      return newUser
      
    } catch (error) {
      console.log(error);
      return `${error}`
    }
  }

  updateUser(data:IUser):string{
    let user = this.users.find((i) => i.id == data.id)
    if(!user) throw new Error('not found')
    this.users[this.users.indexOf(user)] = data
    console.log(this.users);
    return'updated'
  }


}
