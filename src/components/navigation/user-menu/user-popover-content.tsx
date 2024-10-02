import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Calendar, LogOut, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

export function UserMenuContent() {
  return (
    <>
      <DropdownMenuLabel>Área do usuário</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <Link to="/profile">
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Meu perfil</span>
          </DropdownMenuItem>
        </Link>
        <Link to="/cronograma">
          <DropdownMenuItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Cronograma</span>
          </DropdownMenuItem>
        </Link>

        <Link to="/gestao">
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Gestão</span>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuGroup>

      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
      </DropdownMenuItem>
    </>
  );
}
