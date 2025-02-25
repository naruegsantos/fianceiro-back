import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUsertDto extends PartialType(CreateUserDto) {
  readonly name?: string;
  readonly email?: string;
  readonly password?: string;
  readonly permission?:  "ADMIN" | "OPERATOR" | "GUEST";
}
