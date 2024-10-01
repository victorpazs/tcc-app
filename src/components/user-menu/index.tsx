import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { Tooltip } from "@/components/tooltip";

export function UserMenu() {
  return (
    <Link to="/profile">
      <div className="flex gap-4 items-center  py-2 cursor-pointer ">
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <h4>Olá, Vector!</h4>

        <Tooltip title="Sair">
          <Button className="ml-auto " variant="ghost" size={"icon"}>
            <LogOut className="w-4 h-4 color-text-secondary" />
          </Button>
        </Tooltip>
      </div>
    </Link>
  );
}
