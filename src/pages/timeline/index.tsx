import { EventCalendar } from "@/components/event-calendar";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TimeLinePage() {
  const [filter, setFilter] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });

  return (
    <div className="w-full grid grid-cols-12 gap-4">
      <div className="col-span-12">
        <div className="flex flex-col gap-1 items-start">
          <span className="text-3xl font-bold">Cronograma</span>
          <span className="text-lg font-light">
            Uma visão geral sobre suas reuniões e tarefas.
          </span>
        </div>
      </div>

      <div className="col-span-12">
        <Tabs className="w-full" defaultValue="calendar">
          <TabsList className="grid max-w-80 grid-cols-3">
            <TabsTrigger value="calendar">Calendário</TabsTrigger>
            <TabsTrigger value="tasks">Tarefas</TabsTrigger>
            <TabsTrigger value="meetings">Reuniões</TabsTrigger>
          </TabsList>
          <TabsContent className="w-full" value="calendar">
            <EventCalendar filter={filter} events={[1, 2, 3]} />
          </TabsContent>
          <TabsContent className="w-full" value="tasks"></TabsContent>
          <TabsContent className="w-full" value="meetings"></TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
