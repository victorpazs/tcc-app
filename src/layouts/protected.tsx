import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/providers/auth-provider";

export default function ProtectedLayout() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>; // Você pode substituir por um spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
