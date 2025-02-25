export class User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly permission:  "ADMIN" | "OPERATOR" | "GUEST";
}

