import { ChevronsUpDown, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserMenuContent } from "./user-popover-content";
import { useAuth } from "@/providers/auth-provider";

export function UserMenu() {
  const { user } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-4 items-center  py-2 cursor-pointer ">
          <User className="w-8 h-8" />

          <div className="flex flex-col">
            <h4>{user?.name}</h4>
            <h5 className="text-sm text-secondary">{user?.email}</h5>
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
