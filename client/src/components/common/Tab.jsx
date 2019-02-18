import React, { Component } from "react";
import { Tabs } from "antd";
import NewForm from "./NewForm";
import HourlyForm from "./HourlyForm";
import TableonTab from "./TableonTab";

const { TabPane } = Tabs;

class Tab extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" size="large">
          <TabPane tab="Günlük İzin Talepleri" key="1">
            <NewForm />
            <TableonTab />
          </TabPane>
          <TabPane tab="Saatlik İzin Talepleri" key="2">
            <HourlyForm />
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of tab 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Tab;
