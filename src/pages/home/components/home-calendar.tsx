import { EventCalendar } from "@/components/event-calendar";
import { HomeCard } from "./home-card";

export default function Calendar() {
  return (
    <HomeCard
      title="Cronograma"
      description="Todas as suas reuniões e tarefas futuras"
      path="/cronograma"
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
