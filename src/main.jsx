import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AdmEditPag from "./routes/Adm/AdmEditPag";
import { Global } from "./styles/Global";

import Home from "./routes/Home";

const route = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "admeditpag", element: <AdmEditPag /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
    <Global></Global>
  </React.StrictMode>
);
