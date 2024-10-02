import {
  BookOpen,
  Calendar,
  Group,
  Home,
  LucideIcon,
  Settings,
} from "lucide-react";

export interface INavOption {
  label: string;
  path: string;
  icon: LucideIcon;
  bottom_nav?: boolean;
}

export const nav_options: INavOption[] = [
  {
    label: "Início",
    icon: Home,
    path: "/",
    bottom_nav: true,
  },
  {
    label: "Cronograma",
    icon: Calendar,
    path: "/cronograma",
    bottom_nav: false,
  },
  {
    label: "Bancas",
    icon: Group,
    path: "/bancas",
    bottom_nav: true,
  },
  {
    label: "Cursos",
    icon: BookOpen,
    path: "/cursos",
    bottom_nav: true,
  },
  {
    label: "Gestão",
    icon: Settings,
    path: "/gestao",
    bottom_nav: false,
  },
];
