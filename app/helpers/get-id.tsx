import { IUser } from "@/data/interfaces/user";

export function getNewId({ users }: { users: IUser[] }) {
  const newId = users && parseInt(users[users.length - 1].id) + 1;
  return newId.toString();
}

export function getCurrentId({ users }: { users: IUser[] }) {
  const currentId = users && parseInt(users[users.length - 1].id);
  return currentId.toString();
}
