import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountDto } from './create-account.dto';

export class UpdateAccountDto extends PartialType(CreateAccountDto) {
  readonly label?:string;
  readonly userId?:number;
  readonly category?: "REVENUE" | "EXPENSE" | "TRANSFERENCE"
}
