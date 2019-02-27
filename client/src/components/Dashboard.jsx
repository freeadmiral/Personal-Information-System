import React, { Component } from "react";
import { Layout, Breadcrumb, Row, Col, Card, Alert, Avatar } from "antd";
import SidebarMenu from "./common/SidebarMenu";
import ProfileMenu from "./common/ProfileMenu";
import HomeCalendar from "./common/HomeCalendar";
import { getbirthDates } from "../services/getAllUsers";
import { getTodayVacations } from "../services/getVacation";

const { Header, Content, Footer } = Layout;

class Dashboard extends Component {
  state = { currentUser: {}, birthDates: [{}], todayAllowed: [{}] };

  componentDidMount() {
    getbirthDates().then(response => {
      this.setState({
        birthDates: response.data
      });
    });
    getTodayVacations().then(response => {
      this.setState({ todayAllowed: response.data });
    });
  }

  render() {
    const { birthDates, todayAllowed } = this.state;
    console.log(todayAllowed);
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
            <Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="Takvim" bordered={false}>
                    <HomeCalendar />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Bugün Doğanlar" bordered={false}>
                    {birthDates.map(data => (
                      <Alert
                        style={{ marginLeft: "50px" }}
                        message={data.name + " " + data.surname}
                        description={data.position}
                        type="success"
                        showIcon
                      />
                    ))}
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Bugün İzinliler" bordered={false}>
                    Card content
                  </Card>
                </Col>
              </Row>
            </Row>
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
