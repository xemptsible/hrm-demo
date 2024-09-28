import useSWR from "swr";

import {
  deleteEndpoint,
  getEndpoint,
  patchEndpoint,
  postEndpoint,
  putEndpoint,
} from "../api/http-client";
import { IUpdatedUser, IUser } from "../interfaces/user";

export function useUserFetcher() {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    "users",
    getEndpoint
  );

  const users: IUser[] = data;

  return {
    users,
    error,
    isLoading,
    isValidating,
    mutate,
  };
}

export function getUsers() {
  const response = getEndpoint("users");

  return response;
}

export function postNewUser({ arg }: { arg: IUser }) {
  const response = postEndpoint("users", { arg });

  return response;
}

export function patchUserById({ id, arg }: { id: string; arg: IUpdatedUser }) {
  const response = patchEndpoint(`users/${id}`, { arg });

  return response;
}

export function putUserById({ id, arg }: { id: string; arg: IUpdatedUser }) {
  const response = putEndpoint(`users/${id}`, { arg });

  return response;
}

export function deleteUserById({ id }: { id: string }) {
  const response = deleteEndpoint(`users/${id}`);

  return response;
}
