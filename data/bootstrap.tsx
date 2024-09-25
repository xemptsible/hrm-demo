import { fakerVI as faker } from "@faker-js/faker";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { writeFileSync } from "fs";

faker.setDefaultRefDate(new Date("2024-07-01"));

import {
  LeaveRequestStatus,
  IDepartment,
  IHRM_Records,
  ILeaveRequest,
  IPayroll,
  IUser,
} from "./interfaces";

let user_seq_id = 1;
let department_seq_id = 1;
let leave_seq_id = 1;
let payroll_seq_id = 1;

const user_count = 15;
const department_count = 5;

export const mock_data: IHRM_Records = {
  users: [],
  departments: [],
  leave_requests: [],
  payrolls: [],
};

// Users
[...Array(user_count)].map(() => {
  const id = user_seq_id++;
  const department_id = faker.number.int({ min: 1, max: department_count });
  const last_name = faker.person.lastName();
  const first_name = faker.person.firstName();
  const birth_date = faker.date.birthdate({ mode: "age", min: 18, max: 22 });
  const sex = faker.person.sex();
  const email = faker.internet.email({
    firstName: first_name,
    lastName: last_name,
    provider: "quocbao.vn",
  });
  const password = faker.internet.password({ memorable: true, length: 8 });
  const position = faker.person.jobTitle();
  const isAdmin = faker.datatype.boolean(0.25);

  const users: IUser = {
    id,
    department_id,
    last_name,
    first_name,
    birth_date,
    sex,
    email,
    password,
    position,
    isAdmin,
  };

  mock_data.users.push(users);
});

// Leave Requests
[...Array(10)].map(() => {
  function random_status_generator() {
    const state = Math.floor(Math.random() * 3);
    switch (state) {
      case 0:
        return LeaveRequestStatus.PENDING;
      case 1:
        return LeaveRequestStatus.REJECTED;
      case 2:
        return LeaveRequestStatus.APPROVED;
      default:
        return LeaveRequestStatus.PENDING;
    }
  }

  const id = leave_seq_id++;
  const user_id = faker.number.int({ min: 1, max: 15 });
  const submitted_at = faker.date.recent({ days: 30 });
  const start_at = faker.date.soon({ days: 7 });
  const end_at = faker.date.soon({ days: 7, refDate: start_at });
  const status = random_status_generator();

  const leave_requests: ILeaveRequest = {
    id,
    user_id,
    submitted_at,
    start_at,
    end_at,
    status,
  };

  mock_data.leave_requests.push(leave_requests);
});

// Departments
[...Array(department_count)].map(() => {
  const id = department_seq_id++;
  const name = faker.commerce.department();

  const departments: IDepartment = {
    id,
    name,
  };

  mock_data.departments.push(departments);
});

//Payrolls
[...Array(user_count)].map(() => {
  const id = payroll_seq_id++;
  const user_id = faker.number.int({ min: 1, max: user_count });
  const base_salary = faker.number.int({
    min: 5000000,
    max: 15000000,
    multipleOf: 1000000,
  });
  const tax = faker.number.int({ min: 5, max: 15, multipleOf: 5 });
  const total_hour = faker.number.int({ min: 160, max: 200 });
  const overtime_hour = total_hour - 160;
  const deductible = faker.number.int({ min: 500000, max: 1000000 });
  const gross_salary = base_salary * (total_hour + overtime_hour);
  const net_salary = gross_salary - gross_salary * (tax / 100) - deductible;
  const paid_at = faker.date.recent({ days: 30 });

  const payrolls: IPayroll = {
    id,
    user_id,
    base_salary,
    tax,
    total_hour,
    overtime_hour,
    deductible,
    gross_salary,
    net_salary,
    paid_at,
  };

  mock_data.payrolls.push(payrolls);
});

// Step 1: Open terminal.
// Step 2: Type 'npx tsx data/bootstrap.tsx'.
// Step 3: Type 'json-server data/db.json'.
writeFileSync("data/fakerjs_data.json", JSON.stringify(mock_data));

// Comment the line above and un-comment the line below the terminal command.

// npx tsx data/bootstrap.tsx for logging
// console.log(JSON.stringify(create_leave_request));
// console.log(mock_data);
