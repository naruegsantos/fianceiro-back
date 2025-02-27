export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly permission:  "ADMIN" | "OPERATOR" | "GUEST";
}
