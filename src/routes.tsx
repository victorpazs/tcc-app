import { createBrowserRouter } from "react-router-dom";

// LAYOUTS
import RootLayout from "./layouts/root";
import ErrorLayout from "./layouts/error";
import AuthLayout from "./layouts/auth";

// PAGES

import HomePage from "./pages/home";
import TimelinePage from "./pages/timeline";
import CoursesPage from "./pages/courses";
import AdminPage from "./pages/admin";
import AuthPage from "./pages/auth";
import JuryPage from "./pages/jury";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/cronograma",
        element: <TimelinePage />,
      },
      {
        path: "/cursos",
        element: <CoursesPage />,
      },
      {
        path: "/bancas",
        element: <JuryPage />,
      },
      {
        path: "/gestao",
        element: <AdminPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: "",
        element: <AuthPage />,
      },
    ],
  },
]);

export { router };
