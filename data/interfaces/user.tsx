export interface IUser {
  id: string;
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

export interface IUpdatedUser {
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
