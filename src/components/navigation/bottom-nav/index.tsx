import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Option } from "./option";
import { nav_options } from "@/constraints/nav-items";
import { UserMenuContent } from "@/components/navigation/user-menu/user-popover-content";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";

export function BottomNav() {
  return (
    <div className="fixed md:hidden z-50 w-[95%] h-16 max-w-lg -translate-x-1/2 bg-card border border-gray-200 rounded-full bottom-4 left-1/2  dark:border-[#323232a1]">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        {nav_options
          .filter((opt) => opt.bottom_nav)
          .map((opt, ind) => (
            <Option
              key={`${ind}-bottom-nav`}
              icon={opt.icon}
              label={opt.label}
              path={opt.path}
            />
          ))}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className={cn(
                "inline-flex flex-col items-center justify-center px-5 rounded-full dark:hover:bg-[#323232a1] hover:bg-slate-300/20  group"
              )}
            >
              <User className={"w-5 h-5 mb-1"} />{" "}
              <span
                className={cn("text-[11px] text-gray-500 dark:text-gray-400")}
              >
                {"Perfil"}
              </span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            <UserMenuContent />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
