import { Link } from "react-router-dom";
import { INavEvent } from "./nav-next-events";

export function Event({ event }: { event: INavEvent }) {
  return (
    <Link to={`/campeonatos/${event.id}`}>
      <div className="flex border border-gray-200 dark:border-[#353535] dark:hover:bg-[#323232a1] hover:bg-slate-300/20 rounded-md">
        <div className="flex flex-col text-start p-2  gap-y-1">
          <span className="text-[13px] font-medium">{event.name}</span>
          <span className="text-[12px] text-secondary">{event.date}</span>
        </div>
      </div>
    </Link>
  );
}
