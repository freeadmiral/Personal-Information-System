import React, { Component } from "react";
import { Layout, Breadcrumb } from "antd";
import SidebarMenu from "./common/SidebarMenu";
import ProfileMenu from "./common/ProfileMenu";
import Tab from "./common/Tab";
import jwtDecode from "jwt-decode";
import { getVacation } from "./../services/getVacation";

const { Header, Content, Footer } = Layout;

class VacationReq extends Component {
  state = {
    vacatiionData:
      [{
        _id: "",
        leaveDate: "",
        entryDate: "",
        vacationType: "",
        adress: "",
      }]
  };

  componentDidMount() {
    const token = localStorage.token;
    const decoded = jwtDecode(token);
    getVacation(decoded._id).then(response => {
      this.setState({ vacatiionData: response.data[0] });
    });
  }

  render() {
    console.log(this.state.vacatiionData);
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
              <ProfileMenu />
            </div>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <Tab vacation={this.state.vacatiionData} />
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

export default VacationReq;
