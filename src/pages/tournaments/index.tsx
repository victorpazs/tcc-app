import { Search } from "@/components/search";
import { useFetchTournaments } from "./hooks/useFetchTournaments";
import { useEffect, useState } from "react";

export default function TournamentsPage() {
  const [filter, setFilter] = useState({ limit: 5, search: "" });
  const { fetchData } = useFetchTournaments();

  useEffect(() => {
    fetchData(filter);
  }, [filter]);

  return (
    <div className="w-full grid grid-cols-12 gap-8">
      <div className="col-span-12">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1 items-start">
            <span className="text-3xl font-bold">Campeonatos</span>
            <span className="text-lg font-light">
              Busque pelos campeonatos disponíveis.
            </span>
          </div>

          <Search
            // disabled={loading}
            className="max-w-64"
            onSearch={(search) => {
              setFilter({ ...filter, search });
            }}
          />
        </div>
      </div>

      <div className="col-span-12"></div>
    </div>
  );
}
