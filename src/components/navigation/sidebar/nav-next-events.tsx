import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import moment from "moment";
import { Event } from "./nav-event";
import { ExternalLink } from "lucide-react";

export interface INavEvent {
  id: number;
  name: string;
  date: string;
}

const events = [
  {
    id: 1,
    name: "Reunião - Victor Paz",
    date: moment().subtract(3, "months").format("DD/MM/YYYY - HH:mm"),
  },
  {
    id: 1,
    name: "Reunião - Douglas Geller",
    date: moment().subtract(3, "months").format("DD/MM/YYYY - HH:mm"),
  },
];

export function NavNextEvents() {
  return (
    <div className="mt-6">
      <span className="text-sm font-medium text-secondary flex gap-1 items-center">
        Próximos eventos
        <Link to="/calendario">
          <ExternalLink size={12} />
        </Link>
      </span>
      <Separator className="mb-4" />{" "}
      <div className="flex flex-col gap-y-2">
        {events.map((event, ind) => (
          <Event key={ind} event={event} />
        ))}
      </div>
    </div>
  );
}
