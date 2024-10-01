import { useGet } from "@/hooks/useGet";
import { ICourse, IFilterCourses } from "../types";

export function useFetchCourses(filter?: IFilterCourses) {
  const { data, loading, fetchData } = useGet<ICourse[]>("/news", filter);

  return { data, loading };
}
