import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { generalPaths } from "./general.pages";
import { facultyPath } from "./faculty.routes";
import { studentPath } from "./student.routes";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: generalPaths,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: routesGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routesGenerator(facultyPath),
  },
  {
    path: "/student",
    element: <App></App>,
    children: routesGenerator(studentPath),
  },

  { path: "/login", element: <Login></Login> },
  { path: "/register", element: <Register></Register> },
]);

export default router;
