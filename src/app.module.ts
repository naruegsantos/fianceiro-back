import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from './account/account.module';
import { RecordModule } from './record/record.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, ConfigModule.forRoot({
    isGlobal: true,
  }), AccountModule, RecordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
