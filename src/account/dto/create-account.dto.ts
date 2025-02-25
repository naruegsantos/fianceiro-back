export class CreateAccountDto {
  readonly label:string;
  readonly userId:number;
  readonly category: "REVENUE" | "EXPENSE" | "TRANSFERENCE"
}
