import { IUser } from "../admin/types";

export interface IJury {
  id: number;
  created_at?: Date;
  student: IUser;
  advisor: IUser;
  coordinator: IUser;
}
