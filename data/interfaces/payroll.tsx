export interface IPayroll {
  id: string;
  user_id: number;
  base_salary: number;
  tax: number;
  total_hour: number;
  overtime_hour: number;
  deductible: number;
  gross_salary: number;
  net_salary: number;
  paid_at: Date;
}
