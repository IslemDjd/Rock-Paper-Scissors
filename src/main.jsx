import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './Routes/Home/Home';
import SimpleMode from './Routes/SimpleMode/SimpleMode';
import ErrorPage from './Routes/Error/ErrorPage';
import AdvancedMode from './Routes/AdvancedMode/AdvancedMode';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "simplemode",
    element: <SimpleMode />,
  },
  {
    path: "advancedmode",
    element: <AdvancedMode />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
