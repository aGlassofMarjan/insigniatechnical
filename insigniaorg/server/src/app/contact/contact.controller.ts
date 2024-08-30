import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto, UpdateContactDto } from './dto';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  async getAllContacts(
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 10,
    @Query('name') name?: string
  ) {
    return this.contactService.getAllContacts(page, pageSize, name);
  }

  @Post()
  async createContact(@Body() createContactDto: CreateContactDto) {
    return this.contactService.addContact(createContactDto);
  }

  @Patch(':id')
  async updateContact(
    @Param('id') contactId: string,
    @Body() updateContactDto: UpdateContactDto
  ) {
    return this.contactService.updateContact(contactId, updateContactDto);
  }

  @Delete(':id')
  async deleteContact(@Param('id') contactId: string) {
    return this.contactService.deleteContact(contactId);
  }
}
