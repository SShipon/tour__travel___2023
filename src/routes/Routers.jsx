import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
       {
        path: "/",
        element: <Home />
       },

      ],
    },
    {
      path: "/contact",
      element: <Contact />,
    }
  ]);