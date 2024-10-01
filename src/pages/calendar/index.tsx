import { EventCalendar } from "@/components/event-calendar";
import { useState } from "react";

export default function CalendarPage() {
  const [filter, setFilter] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });

  return (
    <div className="w-full grid grid-cols-12 gap-4">
      <div className="col-span-12">
        <span className="text-3xl font-bold">Calendário</span>
      </div>

      <div className="col-span-12">
        <EventCalendar filter={filter} events={[1, 2, 3]} />
      </div>
    </div>
  );
}
