import { MenuIcon } from "lucide-react";
import { UserMenu } from "./user-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Topbar() {
  return (
    <nav className=" bg-card fixed w-full z-[99999] top-0 start-0  border-gray-200 dark:border-[#353535]">
      <div className="flex flex-wrap items-center justify-between mx-auto py-2 px-2 md:px-4">
        <div className="flex gap-4 items-center">
          <Button variant="ghost" size={"icon"}>
            <MenuIcon className="w-8 h-8" />
          </Button>
          <Link to="/">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/assembly.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
        <div className="flex items-center gap-x-2">
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}
