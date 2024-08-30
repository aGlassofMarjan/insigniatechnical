import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [PrismaModule],
  exports: [UserService],
})
export class UserModule {}
