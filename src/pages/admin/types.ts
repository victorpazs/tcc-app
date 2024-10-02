export interface IUser {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  type: "student" | "teacher" | "coordinator";
}
