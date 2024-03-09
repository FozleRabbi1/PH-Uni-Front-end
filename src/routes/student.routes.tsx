import OfferdCourse from "../pages/student/OfferdCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

export const studentPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard></StudentDashboard>,
  },
  {
    name: "Offerd Course",
    path: "offerd-course",
    element: <OfferdCourse></OfferdCourse>,
  },
];
