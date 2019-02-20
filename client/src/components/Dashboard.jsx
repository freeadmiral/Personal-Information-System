import React, { Component } from "react";
import { Layout, Breadcrumb, Calendar, Row, Col, Card } from "antd";
import SidebarMenu from "./common/SidebarMenu";
import ProfileMenu from "./common/ProfileMenu";
import HomeCalendar from "./common/HomeCalendar";
import { getbirthDates } from "../services/getAllUsers";
import moment from "moment";

const { Header, Content, Footer } = Layout;

class Dashboard extends Component {
  state = { currentUser: {}, birthDates: [{}], todayDate: "" };

  componentDidMount() {
    getbirthDates().then(response => {
      this.setState({
        birthDates: response.data
      });
    });
    const today = new Date();
    const date =
      ("0" + today.getDate()).slice(-2) +
      "-" +
      ("0" + (today.getMonth() + 1)).slice(-2);
    this.setState({ todayDate: date });
  }

  render() {
    const { birthDates, todayDate } = this.state;
    console.log(moment(birthDates[0].birthDate).format("DD-MM"));
    console.log(todayDate);
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
                <div style={{ background: "#ECECEC", padding: "30px" }}>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Card title="Takvim" bordered={false}>
                        <HomeCalendar />
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card title="Bugün Doğanlar" bordered={false}>
                        {birthDates.map(data =>
                          moment(data.birthDate).format("DD-MM") ===
                          todayDate ? (
                            <p key={data._id}>
                              {data.name + " " + data.surname}
                            </p>
                          ) : null
                        )}
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card title="Card title" bordered={false}>
                        Card content
                      </Card>
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
