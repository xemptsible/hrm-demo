export enum LeaveRequestStatus {
  PENDING = "Pending",
  REJECTED = "Rejected",
  APPROVED = "Approved",
}

export interface ILeaveRequest {
  id: string;
  userId: number;
  submittedAt: Date;
  startAt: Date;
  endAt: Date;
  status: LeaveRequestStatus;
}
