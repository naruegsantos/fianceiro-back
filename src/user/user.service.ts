import { Inject, Injectable } from '@nestjs/common';
import { IUser, users } from './types';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prismaClient: PrismaService) {} 

  getAll(){
    return this.prismaClient.user.findMany()
  }

  getOne(uniqueInput:Prisma.UserWhereUniqueInput) {
    return this.prismaClient.user.findUnique( {
      where: uniqueInput
    })
  }

  async createUser(data:Prisma.UserCreateInput):Promise<string| Promise<User>> {
    let userAlreadyExists:boolean = await this.prismaClient.user.findUnique( {
      where: {
        email: data.email
      }
    }) != null

    try {
      if(userAlreadyExists) throw new Error(`User with email \n ${data.email} already exists`)
      let newUser = this.prismaClient.user.create({data})
      console.log(newUser);
      return newUser
      
    } catch (error) {
      console.log(error);
      return `${error}`
    }
  }

  async updateUser(params: {
    where: {
        id: number
    }
    data: Prisma.UserUpdateInput
  }): Promise < User > {
      const {
          data,
          where
      } = params
      return this.prismaClient.user.update({
          data,
          where
      });
  }



}
