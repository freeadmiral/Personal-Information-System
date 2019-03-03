import React, { Component } from 'react';
import SidebarMenu from "./common/SidebarMenu";
import ProfileMenu from "./common/ProfileMenu";
import { Layout, Tabs, Icon, Breadcrumb } from "antd";
import CompanySettings from './CompanySettings';

const TabPane = Tabs.TabPane;
const { Header, Content, Footer } = Layout;


class Settings extends Component {
    state = {}
    render() {
        return (<Layout style={{ minHeight: "100vh" }}>
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

                    </Breadcrumb>
                    <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={<span><Icon type="home" />Şirket Ayarları</span>} key="1">
                                <CompanySettings></CompanySettings>
                            </TabPane>
                            <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
                                Tab 2
                            </TabPane>
                        </Tabs>
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Personel Bilgi Sistemi ©2019 Created by Ant UED
          </Footer>
            </Layout>
        </Layout>);
    }
}

export default Settings;