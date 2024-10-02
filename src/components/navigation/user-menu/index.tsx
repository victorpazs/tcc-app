import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronsUpDown, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserMenuContent } from "./user-popover-content";

export function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-4 items-center  py-2 cursor-pointer ">
          <User className="w-8 h-8" />

          <div className="flex flex-col">
            <h4>Victor Paz</h4>
            <h5 className="text-sm text-secondary">victorps.2004@gmail.com</h5>
          </div>

          <ChevronsUpDown className="w-4 h-4 color-text-secondary bg-black/5 rounded-sm" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64">
        <UserMenuContent />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
