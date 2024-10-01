import { BookOpen, Group, Home, LucideIcon, Settings } from "lucide-react";

export interface INavOption {
  label: string;
  path: string;
  icon: LucideIcon;
}

export const nav_options: INavOption[] = [
  {
    label: "Início",
    icon: Home,
    path: "/",
  },
  {
    label: "Bancas",
    icon: Group,
    path: "/bancas",
  },
  {
    label: "Cursos",
    icon: BookOpen,
    path: "/cursos",
  },
  {
    label: "Gestão",
    icon: Settings,
    path: "/gestao",
  },
];
