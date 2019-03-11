import React, { Component } from "react";
import { Layout, Row, Col, Card, Icon, Statistic } from "antd";
import SidebarMenu from "./common/SidebarMenu";
import ProfileMenu from "./common/ProfileMenu";
import { getbirthDates, getAllUsers } from "../services/getAllUsers";
import { getTodayVacations } from "../services/getVacation";
import Chart from "./Chart";
import PieChart from "./PieChart";

const { Header, Footer, Content } = Layout;

class Dashboard2 extends Component {
  state = {
    allUsers: [],
    currentUser: {},
    birthDates: [],
    todayVacations: []
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
    getAllUsers().then(response => {
      this.setState({ allUsers: response.data });
    });
  }

  render() {
    const gridStyle = {
      width: "80%",
      textAlign: "center",
      height: 500,
      boxShadow: "rgba(0, 0, 0, 0.5) 0px 1px 10px 0px",
      marginLeft: 110,
      background: "#fff"
    };

    const { allUsers, todayVacations, currentUser } = this.state;
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
              <ProfileMenu currentUser={currentUser} />
            </div>
          </Header>
          <div>
            <Row style={{ margin: 30 }} gutter={24}>
              <Col span={24}>
                <Chart />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                {" "}
                <Card.Grid style={gridStyle}>
                  {" "}
                  <PieChart allUsers={allUsers} />
                </Card.Grid>
              </Col>
              <Col span={12}>
                {" "}
                <Card.Grid style={gridStyle}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Statistic
                        title="Toplam Çalışan"
                        value={45}
                        prefix={<Icon type="user" />}
                      />
                    </Col>
                    <Col span={12}>
                      <Statistic
                        title="Bugün İzinliler"
                        value={todayVacations.length}
                        suffix={"/" + 45}
                      />
                    </Col>
                  </Row>
                </Card.Grid>
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
