import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferdCourse from "../pages/faculty/OfferdCourse";

export const facultyPath = [
  {
    name: "F Dashboard",
    path: "dashboard",
    element: <FacultyDashboard></FacultyDashboard>,
  },
  {
    name: "F Offerd Course",
    path: "offerd-course",
    element: <OfferdCourse></OfferdCourse>,
  },
];

// export const facultySideBarItems = facultyPath.reduce(
//   (acc: TFacultySideBar[], item) => {
//     if (item.name && item.path) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/faculty/${item.path}`}>{item.name}</NavLink>,
//       });
//     }
//     return acc;
//   },
//   []
// );

// export const facultyRoutes = facultyPath.reduce(
//   (acc: TFacultyRoutes[], item) => {
//     if (item.name && item.element) {
//       acc.push({
//         path: item.path,
//         element: item.element,
//       });
//     }
//     return acc;
//   },
//   []
// );
