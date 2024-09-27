export enum LeaveRequestStatus {
  PENDING = "Pending",
  REJECTED = "Rejected",
  APPROVED = "Approved",
}

export interface ILeaveRequest {
  id: string;
  user_id: number;
  submitted_at: Date;
  start_at: Date;
  end_at: Date;
  status: LeaveRequestStatus;
}
