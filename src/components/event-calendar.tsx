import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCalendar } from "@/hooks/useCalendar";

export interface CalendarFilter {
  year: number;
  month: number;
}

type EventCalendarProps = {
  filter?: CalendarFilter;
  events: number[];
  is_home?: boolean;
};

const DAYS_OF_WEEK = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export function EventCalendar({
  filter = { year: new Date().getFullYear(), month: new Date().getMonth() },
  is_home,
}: EventCalendarProps) {
  const { dates } = useCalendar(filter);

  return (
    <div className="flex flex-col w-full gap-2 ">
      <div className="flex justify-between w-full items-center">
        <span className="text-lg">
          {MONTHS[filter.month]} {filter.year}
        </span>
        {!is_home && (
          <div className="flex gap-2 items-center">
            <Button title="mês anterior" variant={"ghost"} size={"icon"}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button title="próximo mês" variant={"ghost"} size={"icon"}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-7 overflow-x-auto w-full">
        {DAYS_OF_WEEK.map((day) => (
          <span
            key={day}
            className="text-xs text-text-secondary text-center pb-2 items-bottom flex justify-start"
          >
            {day[0]}
          </span>
        ))}

        {dates.map((date, index) => {
          return (
            <div
              key={`${index}-${date.day}`}
              className={cn(
                "border h-32 relative min-w-16",
                index === 0 && "rounded-tl ",
                index === 6 && "rounded-tr ",
                date.month !== filter.month && "opacity-50",
                is_home && "h-20"
              )}
            >
              <span className="text-xs absolute top-1 left-1">{date.day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
