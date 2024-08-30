import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ContactModule } from './contact/contact.module';
import { ContactGroupModule } from './contact-group/contact-group.module';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    AuthModule,
    ContactModule,
    ContactGroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
