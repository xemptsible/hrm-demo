import { IDepartment } from "./department";
import { ILeaveRequest } from "./leave_request";
import { IPayroll } from "./payroll";
import { IUser } from "./user";

export interface IHRM_Records {
  users: IUser[];
  departments: IDepartment[];
  leave_requests: ILeaveRequest[];
  payrolls: IPayroll[];
}
