export type User = {
  id: string;
  name: string;
  email: string;
  permission: "student" | "teacher" | "coordinator";
  course_id: number;
  created_at: Date;
};
