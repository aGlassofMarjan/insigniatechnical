import { IsString, IsOptional } from 'class-validator';

export class CreateContactGroupDto {
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class AddContactToGroupDto {
  @IsString()
  contactId!: string;

  @IsString()
  groupId!: string;
}
