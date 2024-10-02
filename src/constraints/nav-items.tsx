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
  permissions: string[];
}

export const nav_options: INavOption[] = [
  {
    label: "Início",
    icon: Home,
    path: "/",
    bottom_nav: true,
    permissions: ["coordinator", "student", "teacher"],
  },
  {
    label: "Cronograma",
    icon: Calendar,
    path: "/cronograma",
    bottom_nav: false,
    permissions: ["coordinator", "student", "teacher"],
  },
  {
    label: "Bancas",
    icon: Group,
    path: "/bancas",
    bottom_nav: true,
    permissions: ["coordinator"],
  },
  {
    label: "Cursos",
    icon: BookOpen,
    path: "/cursos",
    bottom_nav: true,
    permissions: ["coordinator"],
  },
  {
    label: "Gestão",
    icon: Settings,
    path: "/gestao",
    bottom_nav: false,
    permissions: ["coordinator"],
  },
];
