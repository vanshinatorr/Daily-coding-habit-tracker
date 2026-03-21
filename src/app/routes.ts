import { createBrowserRouter } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { NotFound } from "./pages/NotFound";
import { Pricing } from "./pages/Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/pricing",
    Component: Pricing,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);