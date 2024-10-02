import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/providers/auth-provider";
import { Loader } from "@/components/loader";
import { Sidebar } from "@/components/navigation/sidebar";
import { BottomNav } from "@/components/navigation/bottom-nav";

export default function ProtectedLayout() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

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
