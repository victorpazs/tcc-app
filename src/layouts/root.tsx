import { BottomNav } from "@/components/navigation/bottom-nav";
import { Sidebar } from "@/components/navigation/sidebar";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="h-full flex">
      <Sidebar />

      <main className="p-3 pt-10 pb-16    w-full overflow-y-auto">
        <div className="flex-1  mx-auto h-full max-w-7xl ">
          <Outlet />
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
