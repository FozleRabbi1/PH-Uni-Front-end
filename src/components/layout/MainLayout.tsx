import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
const { Content, Footer, Header } = Layout;
const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <SideBar></SideBar>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
