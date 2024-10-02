import { CalendarFilter } from "@/components/event-calendar";
import { useEffect, useState } from "react";

interface IDate {
  day: number;
  month: number;
}

export function useCalendar(filter: CalendarFilter) {
  const [dates, setDates] = useState<IDate[]>([]);
  useEffect(() => {
    const getMonthDates = () => {
      const calendar_dates = [];

      const firstDayOfMonth = new Date(filter.year, filter.month, 1).getDay();

      // Calculate the previous month
      const prevMonth = filter.month === 0 ? 12 : filter.month;

      const totalDaysInPrevMonth = new Date(
        filter.year,
        prevMonth,
        0
      ).getDate();

      const totalDaysInMonth = new Date(
        filter.year,
        filter.month + 1,
        0
      ).getDate();

      // Push days from the previous month
      for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        calendar_dates.push({
          day: totalDaysInPrevMonth - i,
          month: prevMonth - 1,
        });
      }

      // Push days of the current month
      for (let day = 1; day <= totalDaysInMonth; day++) {
        calendar_dates.push({
          day,
          month: filter.month,
        });
      }

      return calendar_dates;
    };

    setDates(getMonthDates());
  }, [filter.month]);

  return { dates };
}
