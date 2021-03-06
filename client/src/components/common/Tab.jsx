import React, { Component } from "react";
import { Tabs } from "antd";
import NewForm from "./NewForm";
import HourlyForm from "./HourlyForm";
import TableonTab from "./TableonTab";
import HourlyTab from "./HourlyTab";

const { TabPane } = Tabs;

class Tab extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" size="large">
          <TabPane tab="Günlük İzin Talepleri" key="1">
            <NewForm />
            <TableonTab vacationData={this.props.vacation} />
          </TabPane>
          <TabPane tab="Saatlik İzin Talepleri" key="2">
            <HourlyForm />
            <HourlyTab hourly={this.props.hourlyVacation} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Tab;
