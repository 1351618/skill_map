import React from "react";
import ReactDOM from "react-dom/client";
import "./app/style/global.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routeList } from "./shared/config/route/routeList.tsx";
import { ThemeProvider } from "./app/providers/themeProvider/ui/ThemeProvider.tsx";
import "./shared/config/i18n/i18n.ts";

const router = createBrowserRouter(routeList, { basename: "/" });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
