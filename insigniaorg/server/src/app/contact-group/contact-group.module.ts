import { Module } from '@nestjs/common';
import { ContactGroupService } from './contact-group.service';
import { ContactGroupController } from './contact-group.controller';

@Module({
  providers: [ContactGroupService],
  controllers: [ContactGroupController],
})
export class ContactGroupModule {}
