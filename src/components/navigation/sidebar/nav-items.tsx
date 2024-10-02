import { useAuth } from "@/providers/auth-provider";
import { NavOption } from "./nav-option";
import { nav_options } from "@/constraints/nav-items";

export function NavItems() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-y-1 mt-6">
      {nav_options
        .filter(
          (opt) =>
            user?.permission && opt.permissions.includes(user?.permission)
        )
        .map((opt, ind) => (
          <NavOption {...opt} key={ind} />
        ))}
    </div>
  );
}
