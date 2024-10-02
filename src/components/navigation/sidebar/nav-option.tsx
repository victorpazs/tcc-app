import { Link, useLocation } from "react-router-dom";
import { INavOption } from "@/constraints/nav-items";
import { cn } from "@/lib/utils";

export function NavOption({ label, icon: Icon, path }: INavOption) {
  const location = useLocation();
  const isOnRoute = location.pathname == path;

  return (
    <Link
      to={path}
      className={cn(
        "pl-2 py-2 rounded-sm dark:hover:bg-[#323232a1] hover:bg-slate-300/20  flex items-center gap-x-2 justify-start text-sm",
        isOnRoute &&
          "outline outline-1 outline-gray-200 dark:outline-[#353535] dark:bg-[#323232a1] bg-slate-300/20"
      )}
    >
      <Icon className="w-5 h-5 mr-1" />
      {label}
    </Link>
  );
}
