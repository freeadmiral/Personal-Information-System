import React, { Component } from "react";
import { Menu, Icon, Layout } from "antd";
import { NavLink, Link } from "react-router-dom";

class SidebarMenu extends Component {
  state = { collapsed: false };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const SubMenu = Menu.SubMenu;
    const { Sider } = Layout;

    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div
          className="logo"
          style={{
            height: "53px",
            background: "rgba(255,255,255,.2)",
            margin: "16px"
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <NavLink to="/dashboard  ">
              <Icon type="home" />
              <span>Ana Sayfa</span>
            </NavLink>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>Kişisel İşlemler</span>
              </span>
            }
          >
            <Menu.Item key="3">
              <NavLink to="/vacation">İzin Talepleri</NavLink>
            </Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SidebarMenu;
