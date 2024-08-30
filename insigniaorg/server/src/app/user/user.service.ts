import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UserRoleEnum } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // TODO: create user
  async create(createUserDto: CreateUserDto) {
    if (!createUserDto.email) {
      throw new Error('Email is required');
    }

    if (!createUserDto.password) {
      throw new Error('Password is required');
    }

    return this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: createUserDto.password,
        name: createUserDto.name,
        role: UserRoleEnum.USER,
        workspace: {
          connect: { id: createUserDto.workspaceId },
        },
      },
    });
  }

  // TODO: get all user
  async findAll() {
    return this.prisma.user.findMany();
  }

  // TODO: get user by id
  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  // TODO: get user by email
  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  // TODO: update user by id
  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  // TODO: delete user by id
  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
