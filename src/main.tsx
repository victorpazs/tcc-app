import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./index.css";
import { ThemeProvider } from "./providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import moment from "moment";

moment.locale("pt-br");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider storageKey="theme-preference" defaultTheme="dark">
    <RouterProvider router={router} />
    <Toaster />
  </ThemeProvider>
);
