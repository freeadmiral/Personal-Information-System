import React, { Component } from "react";
import { Card, Row, Layout } from "antd";
import { getAllUsers } from "../services/getAllUsers";
import ProfileMenu from "./common/ProfileMenu";
import SidebarMenu from "./common/SidebarMenu";
import { Link } from "react-router-dom";

const { Meta } = Card;
const { Header, Content, Footer } = Layout;

class Members extends Component {
  state = {
    allMembers: [{}]
  };

  componentDidMount() {
    getAllUsers().then(res => {
      this.setState({ allMembers: res.data });
    });
  }
  render() {
    const { allMembers } = this.state;
    const columns = allMembers.map(member => (
      <Link to={`/member/${member.username}`}>
        <Card
          hoverable
          style={{
            width: 240,
            margin: 50,
            textAlign: "center",
            borderRadius: 15,
            boxShadow: "rgba(0, 0, 0, 0.5) 0px 1px 10px 0px"
          }}
          cover={
            <img
              key={member._id}
              style={{ padding: 20 }}
              alt={member.name}
              src={member.img}
            />
          }
        >
          <Meta title={member.name} description={member.position} />
        </Card>
      </Link>
    ));

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
          <Row type="flex" align="middle">
            {columns}
          </Row>
          <Footer style={{ textAlign: "center" }}>
            Personel Bilgi Sistemi ©2019 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Members;
