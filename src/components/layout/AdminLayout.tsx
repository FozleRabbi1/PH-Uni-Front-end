import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h2>this is admin layout (Nav Bar) </h2>
      <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;
