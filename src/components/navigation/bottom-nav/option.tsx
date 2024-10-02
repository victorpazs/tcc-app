import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface OptionProps {
  path: string;
  icon: LucideIcon;
  label: string;
}

export function Option({ path, icon: Icon, label }: OptionProps) {
  const location = useLocation();
  const isOnRoute = location.pathname == path;

  return (
    <>
      <Link
        to={path}
        className={cn(
          "inline-flex flex-col items-center justify-center px-5 rounded-full dark:hover:bg-[#323232a1] hover:bg-slate-300/20  group",
          isOnRoute && "dark:bg-[#323232a1] bg-slate-300/20"
        )}
      >
        <Icon
          className={cn(
            "w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 dark:group-hover:text-white group-hover:text-slate-700",
            isOnRoute && "dark:text-white text-slate-700"
          )}
        />

        <span className={cn("text-[11px] text-gray-500 dark:text-gray-400")}>
          {label}
        </span>
      </Link>
    </>
  );
}
