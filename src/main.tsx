import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Import the layouts
import PageWelcome from "./Pages/PageWelcome/PageWelcome.jsx";
import PageComponents from "./Pages/PageComponents/PageComponents.jsx";
import {NotFound} from "./Pages/NotFound.jsx";

// Import the components

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWelcome />,
      
    // { path: "*", element: <NotFound /> },
  },
  {
    path:'/docs/',
    element:<PageComponents/>,
  },
  {
    path:'/docs/:item',
    element:<PageComponents/>,
  },
  {
    path:'*',
    element:<NotFound/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
