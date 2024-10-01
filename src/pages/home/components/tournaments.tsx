import { useFetchTournaments } from "@/pages/tournaments/hooks/useFetchTournaments";
import { HomeCard } from "./home-card";
import moment from "moment";
import { useEffect } from "react";

export default function Tournaments() {
  const { data: tournaments, loading, fetchData } = useFetchTournaments();

  useEffect(() => {
    fetchData({ limit: 5 });
  }, []);

  return (
    <HomeCard title="Campeonatos" path="/campeonatos">
      {loading && <HomeCard.Loading />}
      {tournaments && tournaments[0] ? (
        <>
          {tournaments.map((item) => (
            <HomeCard.Item
              key={item._id}
              title={item.name}
              description={`${moment(item.startDate).format(
                "DD MMM"
              )} - ${moment(item.endDate).format("DD MMM")}`}
              path={`/campeonatos/${item._id}`}
            />
          ))}
        </>
      ) : null}
    </HomeCard>
  );
}
