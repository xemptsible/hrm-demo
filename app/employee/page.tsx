"use client";

import {
  ChevronsUpDown,
  Clock,
  Edit,
  FileX,
  Loader,
  Plus,
  Search,
  Trash,
} from "lucide-react";
import { Button } from "../components/cva/button-cva";
import { useUserFetcher } from "@/data/models/user-model";
import { IUpdatedUser, IUser } from "@/data/interfaces/user";
import {
  API_ENDPOINT,
  deleteEndpoint,
  patchEndpoint,
  postEndpoint,
} from "@/data/api/http-client";
import { getNewId } from "../helpers/get-id";

import ModuleTitle from "../components/module-title";
import useSWRMutation from "swr/mutation";
import { useThemeContext } from "../context/theme-context";

export default function Employee() {
  const { users, isLoading, error } = useUserFetcher();

  if (isLoading)
    return (
      <div className="flex flex-col items-center p-4">
        <Loader size={60} />
        Loading
      </div>
    );
  if (error)
    return (
      <div className="flex flex-col items-center p-4">
        <FileX size={60} />
        404
      </div>
    );

  return (
    <>
      <ModuleTitle title={"Employee"} />
      <EmployeeOptions />
      <EmployeeTable users={users} />
    </>
  );
}

function EmployeeOptions() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between">
      <div className="flex flex-col">
        <label> Search by ID:</label>
        <div className="flex">
          <input type="text" id="id-search" className="flex flex-grow p-2" />
          <Button style={"block"}>
            <Search />
          </Button>
        </div>
      </div>
      <div className="flex ml-auto mt-4">
        <AddEmployee />
      </div>
    </div>
  );
}

function EmployeeTable({ users }: { users: IUser[] }) {
  const { isDark } = useThemeContext();

  return (
    <table
      className={`border ${
        !isDark ? "border-foreground" : ""
      } w-full table-fixed mt-3`}
    >
      <thead>
        <tr className={`${!isDark ? "bg-gray-300" : "bg-slate-700"}`}>
          <th className="text-left p-2 w-[80px]">
            <span className="flex flex-wrap justify-between">
              ID
              <Button className={`p-0`} style={`highlight`}>
                <ChevronsUpDown />
              </Button>
            </span>
          </th>
          <th className="text-left p-2">
            <span className="flex flex-wrap justify-between">
              First Name
              <Button className={`p-0`} style={`highlight`}>
                <ChevronsUpDown />
              </Button>
            </span>
          </th>
          <th className="text-left p-2">
            <span className="flex flex-wrap justify-between">
              Last Name
              <Button className={`p-0`} style={`highlight`}>
                <ChevronsUpDown />
              </Button>
            </span>
          </th>
          <th className="text-left p-2">
            <span className="flex flex-wrap justify-between">
              Email
              <Button className={`p-0`} style={`highlight`}>
                <ChevronsUpDown />
              </Button>
            </span>
          </th>
          <th className="text-left p-2">
            <span className="flex flex-wrap justify-between">
              Position
              <Button className={`p-0`} style={`highlight`}>
                <ChevronsUpDown />
              </Button>
            </span>
          </th>
          <th className="text-left w-[82px] p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: IUser) => {
          return (
            <tr key={user.id}>
              <td
                className="text-ellipsis p-2 whitespace-nowrap overflow-hidden"
                title={`${user.id}`}
              >
                {user.id}
              </td>
              <td
                className="text-ellipsis p-2 whitespace-nowrap overflow-hidden"
                title={`${user.first_name}`}
              >
                {user.first_name}
              </td>
              <td
                className="text-ellipsis p-2 whitespace-nowrap overflow-hidden"
                title={`${user.last_name}`}
              >
                {user.last_name}
              </td>
              <td
                className="text-ellipsis p-2 whitespace-nowrap overflow-hidden"
                title={`${user.email}`}
              >
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </td>
              <td
                className="text-ellipsis p-2 whitespace-nowrap overflow-hidden"
                title={`${user.position}`}
              >
                {user.position}
              </td>
              <td className="flex">
                <EditEmployee id={user.id} />
                <DeleteEmployee id={user.id} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function AddEmployee() {
  const { users } = useUserFetcher();

  const { trigger: triggerPost, isMutating } = useSWRMutation(
    API_ENDPOINT.USERS,
    postEndpoint
  );

  if (isMutating)
    return (
      <Button>
        <span className="flex gap-2">Adding...</span>
      </Button>
    );

  return (
    <Button
      style={"block"}
      onClick={async () => {
        const mock_user: IUser = {
          id: getNewId({ users }),
          department_id: 1,
          last_name: "Đhạt",
          first_name: "Trần Quang",
          birth_date: new Date(Date.now()),
          sex: "male",
          email: "tquang_dat@quocbao.vn",
          password: "123456",
          position: "Front-end Developer",
          isAdmin: false,
        };

        try {
          triggerPost(mock_user);
        } catch (error) {
          throw error;
        }
      }}
    >
      <span className="flex gap-2">
        <Plus />
        Add an employee
      </span>
    </Button>
  );
}

function EditEmployee({ id }: { id: IUser["id"] }) {
  const { mutate } = useUserFetcher();

  const { trigger: triggerUpdate, isMutating } = useSWRMutation(
    `${API_ENDPOINT.USERS}/${id}`,
    patchEndpoint
  );

  if (isMutating)
    return (
      <Button>
        <Clock />
      </Button>
    );

  return (
    <Button
      onClick={async () => {
        const edited_user: IUpdatedUser = {
          department_id: 1,
          last_name: "Đạt",
          first_name: "Trần Quang",
          birth_date: new Date(Date.now()),
          sex: "male",
          email: "tquang_dat@quocbao.vn",
          password: "123456",
          position: "Front-end Developer",
          isAdmin: false,
        };
        try {
          await triggerUpdate(edited_user);
          await mutate();
        } catch (error) {
          throw error;
        }
      }}
    >
      <Edit />
    </Button>
  );
}

function DeleteEmployee({ id }: { id: IUser["id"] }) {
  const { mutate } = useUserFetcher();
  const { trigger: triggerDelete, isMutating } = useSWRMutation(
    `${API_ENDPOINT.USERS}/${id}`,
    deleteEndpoint
  );

  if (isMutating)
    return (
      <Button>
        <Clock />
      </Button>
    );

  return (
    <Button
      className="hover:bg-red-700"
      onClick={async () => {
        try {
          await triggerDelete();
          await mutate();
        } catch (error) {
          throw error;
        }
      }}
    >
      <Trash />
    </Button>
  );
}
