import { useGet } from "@/hooks/useGet";
import { ITournament } from "../types";

export function useFetchTournaments() {
  return useGet<ITournament[]>("/tournaments");
}
