import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login(params:Prisma.UserWhereInput) {
    console.log(params);
    try {
      let data = await this.userService.findOne(params)
      
      if(!data) throw new UnauthorizedException()
      return data

    } catch (error) {
      console.log(error);
      return error
    }
  }
}

//add hash security to passwords