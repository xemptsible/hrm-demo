export enum LeaveRequestStatus {
  PENDING = "Pending",
  REJECTED = "Rejected",
  APPROVED = "Approved",
}

export interface IUser {
  id: number;
  department_id: number;
  last_name: string;
  first_name: string;
  birth_date: Date;
  sex: string;
  email: string;
  password: string;
  position: string;
  isAdmin: boolean;
}

export interface IDepartment {
  id: number;
  name: string;
}

export interface ILeaveRequest {
  id: number;
  user_id: number;
  submitted_at: Date;
  start_at: Date;
  end_at: Date;
  status: LeaveRequestStatus;
}

export interface IPayroll {
  id: number;
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

export interface IHRM_Records {
  users: IUser[];
  departments: IDepartment[];
  leave_requests: ILeaveRequest[];
  payrolls: IPayroll[];
}
