import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/root";
import ErrorPage from "./layouts/error-page";
import HomePage from "./pages/home";
import CalendarPage from "./pages/calendar";
import CoursesPage from "./pages/courses";
import TournamentsPage from "./pages/tournaments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/calendario",
        element: <CalendarPage />,
      },
      {
        path: "/cursos",
        element: <CoursesPage />,
      },
      {
        path: "/campeonatos",
        element: <TournamentsPage />,
      },
    ],
  },
]);

export { router };
