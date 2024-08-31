import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto, UpdateContactDto } from './dto';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async getAllContacts(page: number, pageSize: number, name?: string) {
    return this.prisma.contact.findMany({
      skip: (page - 1) * pageSize,
      take: Number(pageSize),
      where: name ? { name: { contains: name, mode: 'insensitive' } } : {},
    });
  }

  async addContact(createContactDto: CreateContactDto) {
    return this.prisma.contact.create({
      data: createContactDto,
    });
  }

  async updateContact(contactId: string, updateContactDto: UpdateContactDto) {
    return this.prisma.contact.update({
      where: { id: contactId },
      data: updateContactDto,
    });
  }

  async deleteContact(contactId: string) {
    return this.prisma.contact.delete({
      where: { id: contactId },
    });
  }
}
