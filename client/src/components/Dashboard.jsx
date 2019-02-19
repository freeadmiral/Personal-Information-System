import React, { Component } from "react";
import { Layout, Breadcrumb, Calendar, Row, Col, Card } from "antd";
import SidebarMenu from "./common/SidebarMenu";
import ProfileMenu from "./common/ProfileMenu";
import HomeCalendar from "./common/HomeCalendar";
import jwtDecode from "jwt-decode";
import { getUserDetails } from "../services/getUserDetails";
import { getAllUsers } from "../services/getAllUsers";


const { Header, Content, Footer } = Layout;

class Dashboard extends Component {

  state = { currentUser: {}, users: {} };

  componentDidMount() {
    const token = localStorage.token;
    const decoded = jwtDecode(token);
    getUserDetails(decoded.username).then(response => {
      this.setState({ currentUser: response.data[0] });
    })

    getAllUsers().then(res => {
      this.setState({ users: res.data[0] })
    })
  }

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <SidebarMenu />
        <Layout>
          <Header
            style={{
              background: "#fff",
              padding: 0,
              height: "90px",
              boxShadow: "rgba(0, 0, 0, 0.5) 0px 1px 10px 0px"
            }}
          >
            {" "}
            <div style={{ float: "right", margin: "6px", marginRight: "5%" }}>
              <ProfileMenu currentUser={this.state.currentUser} />
            </div>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <Row>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Card title="Takvim" bordered={false}><HomeCalendar /></Card>
                    </Col>
                    <Col span={8}>
                      <Card title="Bugün Doğanlar" bordered={false}>Bugün Doğan Yok</Card>
                    </Col>
                    <Col span={8}>
                      <Card title="Card title" bordered={false}>Card content</Card>
                    </Col>
                  </Row>
                </div>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Personel Bilgi Sistemi ©2019 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
