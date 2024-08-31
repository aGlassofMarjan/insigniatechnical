import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactGroupDto } from './dto';

@Injectable()
export class ContactGroupService {
  constructor(private prisma: PrismaService) {}

  async getAllContactGroups(page: number, pageSize: number, name?: string) {
    return this.prisma.contactGroup.findMany({
      skip: (page - 1) * pageSize,
      take: Number(pageSize),
      where: name ? { name: { contains: name, mode: 'insensitive' } } : {},
    });
  }

  async createContactGroup(createContactGroupDto: CreateContactGroupDto) {
    return this.prisma.contactGroup.create({
      data: createContactGroupDto,
    });
  }

  async addContactToGroup(contactId: string, groupId: string) {
    return this.prisma.contactList.create({
      data: {
        contactId,
        contactGroupId: groupId,
      },
    });
  }

  async getContactsFromGroup(groupId: string, page: number, pageSize: number) {
    return this.prisma.contactList.findMany({
      where: { contactGroupId: groupId },
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        contact: true,
      },
    });
  }

  async deleteContactFromGroup(contactId: string, groupId: string) {
    return this.prisma.contactList.deleteMany({
      where: {
        contactId,
        contactGroupId: groupId,
      },
    });
  }
}
