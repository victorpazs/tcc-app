import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

interface SearchProps {
  onSearch: (search: string) => void;
  className?: string;
  disabled?: boolean;
}

export function Search({ onSearch, className, disabled }: SearchProps) {
  const [search, setSearch] = useState("");

  return (
    <div className="relative">
      <SearchIcon
        onClick={() => onSearch(search)}
        cursor={"pointer"}
        className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-500 dark:text-gray-200 left-3"
      />
      <Input
        disabled={disabled}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar..."
        className={cn(
          "text-sm placeholder:text-gray-500 placeholder:dark:text-gray-200  pl-10 py-4",
          className
        )}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch(search);
        }}
      />
    </div>
  );
}
