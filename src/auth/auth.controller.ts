import { Body, Controller, Get, Post } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor( private authService:AuthService) {}  
  @Post("/")
  login(@Body() data:{email:string, name:string, password:string}) {
    
    return this.authService.login(data)
  }
}


