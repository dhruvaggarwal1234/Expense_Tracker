import React from "react";
import { Layout, theme, Avatar, Dropdown, Menu, Button } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  BellOutlined,
} from "@ant-design/icons";

const { Header, Footer, Content } = Layout;

const HomeLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Dropdown menu for user
  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      {/* ---------- HEADER ---------- */}
      <Header
        className="flex justify-center items-center px-6 shadow-md sticky top-0 z-10"
        style={{
          background: "linear-gradient(90deg, #FF735C, #FF9B6A)",
        }}
      >
        
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-md">
            <span className="text-[#FF735C] font-bold text-lg">ET</span>
          </div>
          <h1 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
            Expense Tracker
          </h1>
        </div>

       
      </Header>

      {/* ---------- CONTENT ---------- */}
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {children}
      </Content>

      {/* ---------- FOOTER ---------- */}
      <Footer
        style={{
          background: "linear-gradient(90deg, #FF735C, #FF9B6A)",
          padding: "24px 16px",
          color: "white",
          textAlign: "center",
          fontSize: 15,
        }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <span>© 2025 Expense Tracker</span>
          <span className="hidden md:block">•</span>
          <span>Built with ❤️ by Dhruv Aggarwal</span>
        </div>
      </Footer>
    </Layout>
  );
};

export default HomeLayout;
