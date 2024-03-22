import React from "react";
import "./app/style/global.scss";
import "./shared/config/i18n/i18n.ts";
import ReactDOM from "react-dom/client";
import { KeyHandler } from "./shared/keyHandler/KeyHandler.tsx";
import { routeList } from "./shared/config/route/routeList.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/providers/themeProvider/ui/ThemeProvider.tsx";

const router = createBrowserRouter(routeList, { basename: "/" });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <KeyHandler />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
