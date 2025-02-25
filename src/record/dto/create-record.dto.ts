export class CreateRecordDto {
  label:string;
  accountId:number;
  category:"REVENUE" | "EXPENSE" | "TRANSFERENCE";
  date:string;
  description?: string | null
}
