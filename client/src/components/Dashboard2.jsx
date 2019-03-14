import React, { Component } from "react";
import { Layout, Row, Col, Card } from "antd";
import SidebarMenu from "./common/SidebarMenu";
import ProfileMenu from "./common/ProfileMenu";
import { getbirthDates } from "../services/getAllUsers";
import { getTodayVacations } from "../services/getVacation";
import Chart from "./Chart";
import PieChart from "./PieChart";
import { cityAnalytic, positionAnalytic } from "../services/Analytics";
import ColumnChart from "./ColumnChart";

const { Header, Footer, Content } = Layout;

class Dashboard2 extends Component {
  state = {
    positions: [],
    cityAnalytic: [],
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
    cityAnalytic().then(response => {
      this.setState({ cityAnalytic: response.data });
    });
    positionAnalytic().then(response => {
      this.setState({ positions: response.data });
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

    const { cityAnalytic, positions, currentUser } = this.state;
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
                <Card.Grid
                  style={{
                    width: "100%",
                    height: 600,
                    background: "#fff",
                    boxShadow: "rgba(0, 0, 0, 0.5) 0px 1px 10px 0px"
                  }}
                >
                  <Chart />
                </Card.Grid>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                {" "}
                <Card.Grid style={gridStyle}>
                  {" Personelin İllere Göre Dağılımı "}
                  <PieChart cityAnalytic={cityAnalytic} />
                </Card.Grid>
              </Col>
              <Col span={12}>
                {" "}
                <Card.Grid style={gridStyle}>
                  <ColumnChart positions={positions} />
                </Card.Grid>
              </Col>
            </Row>
          </div>
          <Footer style={{ textAlign: "center" }}>
            Personel Bilgi Sistemi ©2019 Created by E.Şahin
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard2;
