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
    const { currentUser } = this.props;

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
            <NavLink to="/dashboard">
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
          </SubMenu>
          <Menu.Item key="2">
            <NavLink to="/members">
              <Icon type="team" />
              <span>Çalışanlar</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SidebarMenu;
