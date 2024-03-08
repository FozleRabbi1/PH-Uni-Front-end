import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminRoutes } from "./admin.routes";
import { generalPaths } from "./general.pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: generalPaths,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: adminRoutes,
  },

  { path: "/login", element: <Login></Login> },
  { path: "/register", element: <Register></Register> },
]);

export default router;