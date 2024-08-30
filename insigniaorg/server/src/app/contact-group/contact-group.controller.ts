import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { ContactGroupService } from './contact-group.service';
import { CreateContactGroupDto, AddContactToGroupDto } from './dto';

@Controller('contact-groups')
export class ContactGroupController {
  constructor(private readonly contactGroupService: ContactGroupService) {}

  @Get()
  async getAllContactGroups(
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 10
  ) {
    return this.contactGroupService.getAllContactGroups(page, pageSize);
  }

  @Post()
  async createContactGroup(
    @Body() createContactGroupDto: CreateContactGroupDto
  ) {
    return this.contactGroupService.createContactGroup(createContactGroupDto);
  }

  @Post(':groupId/contacts')
  async addContactToGroup(
    @Param('groupId') groupId: string,
    @Body() addContactToGroupDto: AddContactToGroupDto
  ) {
    return this.contactGroupService.addContactToGroup(
      addContactToGroupDto.contactId,
      groupId
    );
  }

  @Get(':groupId/contacts')
  async getContactsFromGroup(
    @Param('groupId') groupId: string,
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 10
  ) {
    return this.contactGroupService.getContactsFromGroup(
      groupId,
      page,
      pageSize
    );
  }

  @Delete(':groupId/contacts/:contactId')
  async deleteContactFromGroup(
    @Param('groupId') groupId: string,
    @Param('contactId') contactId: string
  ) {
    return this.contactGroupService.deleteContactFromGroup(contactId, groupId);
  }
}
