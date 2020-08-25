import React, { useState } from "react"
import "./dashboard.css"

// Components
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

// Ant Design
import { Layout } from "antd"
const { Content } = Layout

const Ant = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout>
      <Sidebar setCollapsed={setCollapsed} />
      <Layout className='site-layout'>
        <Navbar />
        <Content
          className='site-layout-background'
          style={{
            padding: 24,
            minHeight: 280,
            margin: `${!collapsed ? "20px 0 0 220px" : "10px 10px 0 15px"}`
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Ant
