import { useGet } from "@/hooks/useGet";
import { ICourse } from "../types";

export function useFetchCourses() {
  return useGet<ICourse[]>("/cursos");
}
