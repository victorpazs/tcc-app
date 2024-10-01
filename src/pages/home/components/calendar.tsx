import { EventCalendar } from "@/components/event-calendar";
import { HomeCard } from "./home-card";

export default function Calendar() {
  return (
    <HomeCard
      title="Calendário"
      description="Toda as suas reuniões e eventos futuros"
      path="/calendario"
    >
      <EventCalendar
        is_home
        events={[1, 2, 3]}
        filter={{
          year: new Date().getFullYear(),
          month: new Date().getMonth(),
        }}
      />
    </HomeCard>
  );
}
