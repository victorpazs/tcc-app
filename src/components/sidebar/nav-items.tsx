import { NavOption } from "./nav-option";
import { nav_options } from "@/constraints/nav-items";

export function NavItems() {
  return (
    <div className="flex flex-col gap-y-1 mt-6">
      {nav_options.map((opt, ind) => (
        <NavOption {...opt} key={ind} />
      ))}
    </div>
  );
}
