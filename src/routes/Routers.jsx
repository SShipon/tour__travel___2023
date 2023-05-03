import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
       {
        path: "home",
        element: <Home />
       },
       {
        path: "/about",
        element: <About />
       },

      ],
    },
    {
      path: "/contact",
      element: <Contact />,
    }
  ]);