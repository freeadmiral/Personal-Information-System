import React, { Component } from "react";
import { Layout, Row, Col, Card, Icon } from "antd";
import SidebarMenu from "./common/SidebarMenu";
import ProfileMenu from "./common/ProfileMenu";
import { getbirthDates } from "../services/getAllUsers";
import { getTodayVacations } from "../services/getVacation";

const { Header, Footer } = Layout;

class Dashboard2 extends Component {
  state = {
    currentUser: {},
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
      height: 300,
      boxShadow: "rgba(0, 0, 0, 0.5) 0px 1px 10px 0px",
      marginLeft: 110,
      background: "#fff"
    };

    const { birthDates, todayVacations, currentUser } = this.state;
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
          <div style={{ margin: 30 }}>
            <Row gutter={24}>
              <Col span={7}>
                <Card.Grid style={gridStyle}>Çalışan Dağılımı</Card.Grid>
              </Col>
              <Col span={7}>
                <Card.Grid style={gridStyle}>
                  Bugün Doğanlar <br />
                  <br />
                  {birthDates.map(data => (
                    <div key={data._id} className="icon-list">
                      <Icon type="gift" theme="twoTone" />
                      <h4>{data.name + " " + data.surname}</h4>
                      <p>{data.position}</p>
                    </div>
                  ))}
                </Card.Grid>
              </Col>
              <Col span={7}>
                <Card.Grid style={gridStyle}>
                  Bugun İzinliler <br />
                  <br />
                  {todayVacations.map(today => (
                    <h4 key={today._id}>{today.userId}</h4>
                  ))}
                </Card.Grid>
              </Col>
            </Row>
            <Row style={{ paddingTop: 30 }} gutter={24}>
              <Col span={7}>
                <Card.Grid style={gridStyle}>Resmi Tatiller</Card.Grid>
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
