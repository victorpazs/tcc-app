import { UserMenu } from "../user-menu";
import { NavItems } from "./nav-items";
import { NavNextEvents } from "./nav-next-events";

export function Navigation() {
  return (
    <aside
      className={
        "hidden h-full overflow-y-auto   border-gray-200 dark:border-[#353535] bg-card relative md:flex w-72 flex-col z-[50] p-4 pt-8"
      }
    >
      <UserMenu />
      <NavItems />
      <NavNextEvents />
    </aside>
  );
}
