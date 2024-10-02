import { IUser } from "../types";

export function useFetchUsers() {
  return useGet<IUser[]>("/users");
}
