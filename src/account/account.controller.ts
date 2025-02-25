import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Prisma } from '@prisma/client';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post("/post")
  create(@Body() data: Prisma.AccountCreateInput) {
    return this.accountService.create(data);
  }

  @Get()
  findAll() {
    return this.accountService.findAll();
  }

  @Get("/search")
  search(@Body() params: Prisma.AccountWhereUniqueInput) {
    return this.accountService.search(params);
  }

  @Patch('/patch')
  update(@Body()  data:{data:Prisma.AccountUpdateInput, where:{id:number}}){
    return this.accountService.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountService.remove({id:+id});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountService.findOne({id:+id});
  }



  @Get(':id/total')
  getTotalValue(@Param('id') id: string) {
    let values = this.accountService.calculateTotalValue({id:+id});
    return values
  }

  
}
