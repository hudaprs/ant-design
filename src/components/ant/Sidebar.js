import React from "react"
import { Link } from "react-router-dom"

// Ant Design
import { Layout, Menu, Typography } from "antd"
import { HomeOutlined, UserOutlined, ContactsOutlined } from "@ant-design/icons"

const { Sider } = Layout
const { Title } = Typography

const Sidebar = ({ setCollapsed }) => {
  const location = window.location.href.split("/")[3]

  return (
    <Sider
      style={{
        position: "fixed",
        height: "100vh"
      }}
      width={200}
      breakpoint='lg'
      collapsedWidth='0'
      onBreakpoint={(broken) => {
        setCollapsed(broken)
      }}
    >
      <div className='logo'>
        <Title level={5}>Apotek Natsepa</Title>
      </div>
      <Menu theme='dark' mode='inline'>
        <Menu.Item
          icon={<HomeOutlined />}
          className={location === "" ? "ant-menu-item-selected" : ""}
        >
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item
          icon={<UserOutlined />}
          className={location.includes("user") ? "ant-menu-item-selected" : ""}
        >
          <Link to='/user'>User</Link>
        </Menu.Item>
        <Menu.Item
          icon={<ContactsOutlined />}
          className={location.includes("about") ? "ant-menu-item-selected" : ""}
        >
          <Link to='/about'>About</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar
