import React from "react"

// Ant Design
import { Layout, Row, Col } from "antd"
const { Header } = Layout

const Navbar = () => {
  return (
    <div>
      <Header className='site-layout-background' style={{ padding: "0" }}>
        <Row
          justify='end'
          style={{ backgroundColor: "#fff", padding: "0 20px" }}
        >
          <Col>
            <a href='#1'>Logout</a>
          </Col>
        </Row>
      </Header>
    </div>
  )
}

export default Navbar
