import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RecordService } from './record.service';
import { Prisma } from '@prisma/client';

@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Post("/post")
  create(@Body() data: Prisma.RecordCreateInput) {
    return this.recordService.create(data);
  }

  @Get()
  findAll() {
    return this.recordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordService.findOne({id:+id});
  }

  @Patch('/patch')
  update(@Body()  data:{data:Prisma.RecordUpdateInput, where:{id:number}}){
    return this.recordService.update(data);
  }

  @Delete(':id/delete')
  remove(@Param('id') id: string) {
    return this.recordService.remove({id:+id});
  }
}
