import { Outlet } from "react-router-dom";
export default function AuthLayout() {
  return (
    <main className="h-full flex">
      <Outlet />
    </main>
  );
}
