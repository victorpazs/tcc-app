export type User = {
  id: string;
  name: string;
  email: string;
  type: "student" | "teacher" | "coordinator";
  course_id: number;
  created_at: Date;
};
