import { createBrowserRouter } from "react-router-dom";
import { Landing } from "./Pages/Landing";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";

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
]);