import React, { Component } from "react";
import { Layout, Breadcrumb, Row, Col, Card, Alert } from "antd";
import SidebarMenu from "./common/SidebarMenu";
import ProfileMenu from "./common/ProfileMenu";
import HomeCalendar from "./common/HomeCalendar";
import { getbirthDates } from "../services/getAllUsers";
import { getTodayVacations } from "../services/getVacation";
import { getUserDetails } from "../services/getUserDetails";

const { Header, Content, Footer } = Layout;

class Dashboard2 extends Component {
  state = {
    currentUser: { isAdmin: false },
    birthDates: [{}],
    todayVacations: [{}]
  };

  componentDidMount() {
    getbirthDates().then(response => {
      this.setState({
        birthDates: response.data
      });
    });
    getTodayVacations().then(response => {
      this.setState({ todayVacations: response.data });
    });
  }

  render() {
    const gridStyle = {
      width: "80%",
      textAlign: "center",
      height: 200,
      boxShadow: "rgba(0, 0, 0, 0.5) 0px 1px 10px 0px",
      marginLeft: 110,
      background: "#fff"
    };

    const { birthDates, todayVacations } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <SidebarMenu currentUser={this.state.currentUser} />
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
              <ProfileMenu />
            </div>
          </Header>
          <div style={{ margin: 30 }}>
            <Row gutter={24}>
              <Col span={7}>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
              </Col>
              <Col span={7}>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
              </Col>
              <Col span={7}>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
              </Col>
            </Row>
            <Row style={{ paddingTop: 30 }} gutter={24}>
              <Col span={7}>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
              </Col>
              <Col span={7}>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
              </Col>
              <Col span={7}>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
              </Col>
            </Row>
          </div>

          <Footer style={{ textAlign: "center" }}>
            Personel Bilgi Sistemi ©2019 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard2;
