import { Injectable } from '@nestjs/common';
import { Account, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccountService {
  constructor(private prismaClient: PrismaService) {} 

  create(data: Prisma.AccountCreateInput) {
    return this.prismaClient.account.create({data})
  }

  createMany(data: Prisma.AccountCreateManyInput[] | Prisma.AccountCreateManyInput) {
    return this.prismaClient.account.createManyAndReturn({data})
  }

  findAll() {
    return this.prismaClient.account.findMany();
  }

  findOne(uniqueInput: {id:number}) {
    return this.prismaClient.account.findUnique({
      where: uniqueInput
    });
  }


  search(params: Prisma.AccountWhereUniqueInput) {
    return this.prismaClient.account.findMany({
      where: params
    });
  }

  async update(params: {
    where:{
      id: number
    }
    data: Prisma.AccountUpdateInput
  }): Promise < Account > {
    const {
        data,
        where
    } = params
    return this.prismaClient.account.update({
        data,
        where
    });
  }

  remove(unique: Prisma.AccountWhereUniqueInput) {
    return "Funcionalidade complexa, ainda por vir"
  }


  async calculateTotalValue(uniqueInput:{id:number}){
    let values = await this.prismaClient.account.findUnique({
      relationLoadStrategy: "join",
      where:uniqueInput,
      select: {
        credits: {
          select: {
            value: true,
            recordCategory: true
          },
        },
        debits: {
          select: {
            value: true,
            recordCategory: true
          },
        },
      }
    })

    let credits = values?.credits.reduce((x, y) => x + y.value, 0) || 0
    let debits = values?.debits.reduce((x, y) => x + y.value, 0) || 0

    return  credits - debits
  }
}
