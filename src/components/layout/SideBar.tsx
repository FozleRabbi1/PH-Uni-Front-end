import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { sideBarItemsGenerator } from "../../utils/sideBarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPath } from "../../routes/faculty.routes";
import { studentPath } from "../../routes/student.routes";

const phStyle: React.CSSProperties = {
  color: "white",
  textAlign: "center",
  height: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "red",
};

const SideBar = () => {
  const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
  };

  const role = "admin";
  let sideBarItems;

  switch (role) {
    case userRole.ADMIN:
      sideBarItems = sideBarItemsGenerator(adminPaths, userRole.ADMIN);
      break;

    case userRole.FACULTY:
      sideBarItems = sideBarItemsGenerator(facultyPath, userRole.FACULTY);
      break;

    case userRole.STUDENT:
      sideBarItems = sideBarItemsGenerator(studentPath, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div style={phStyle}>
        <h2>PH Uni</h2>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarItems}
      />
    </Sider>
  );
};

export default SideBar;
