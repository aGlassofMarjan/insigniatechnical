export class CreateUserDto {
  email!: string;
  password!: string;
  name!: string;
  workspaceId?: string;
}

export class UpdateUserDto {
  email?: string;
  password?: string;
  name?: string;
}
