import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Record } from '@prisma/client';

@Injectable()
export class RecordService {
  constructor(private prismaClient: PrismaService) {} 

   create(data: Prisma.RecordCreateInput) {
    return this.prismaClient.record.create({data})
  }

  findAll() {
    return this.prismaClient.record.findMany();
  }

  findOne(uniqueInput: Prisma.RecordWhereUniqueInput) {
    return this.prismaClient.record.findUnique({
      where: uniqueInput
    });
  }

  async update(params: {
    where: {
      id: number
    }
    data: Prisma.RecordUpdateInput
  }): Promise < Record > {
    const {
        data,
        where
    } = params
    return this.prismaClient.record.update({
        data,
        where
    });
}

  remove(unique: Prisma.RecordWhereUniqueInput) {
    return this.prismaClient.record.delete({
      where:unique
    })
  }
}
