export interface IPayroll {
  id: string;
  userId: number;
  baseSalary: number;
  tax: number;
  totalHour: number;
  overtimeHour: number;
  deductible: number;
  grossSalary: number;
  netSalary: number;
  paidAt: Date;
}
