import { useGet } from "@/hooks/useGet";
import { IJury } from "../types";

export function useFetchJury() {
  return useGet<IJury[]>("/jury");
}
