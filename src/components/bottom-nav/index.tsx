import { Home, Newspaper, Trophy, Calendar } from "lucide-react";
import { Option } from "./option";

export function BottomNav() {
  return (
    <div className="fixed md:hidden z-50 w-[95%] h-16 max-w-lg -translate-x-1/2 bg-card border border-gray-200 rounded-full bottom-4 left-1/2  dark:border-[#323232a1]">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        <Option icon={Home} label="Início" path="/" />
        <Option icon={Calendar} label="Calendário" path="/calendario" />
        <Option icon={Trophy} label="Campeonatos" path="/campeonatos" />
        <Option icon={Newspaper} label="Notícias" path="/noticias" />
      </div>
    </div>
  );
}
