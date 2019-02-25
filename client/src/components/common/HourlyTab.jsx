import React, { Component } from "react";
import { Table, Tag } from "antd";

const columns = [
  {
    title: "Çıkış Tarihi",
    dataIndex: "startTime",
    _id: "startTime"
  },
  {
    title: "Dönüş Tarihi",
    dataIndex: "endTime",
    _id: "endTime"
  },
  {
    title: "İzin Türü",
    dataIndex: "vacationType",
    _id: "vacationType"
  },
  {
    title: "Adres",
    dataIndex: "address",
    _id: "address"
  },
  {
    title: "İzin Nedeni",
    dataIndex: "reason",
    _id: "reason"
  },
  {
    title: "Durum",
    _id: "status",
    dataIndex: "status",
    render: status => (
      <span>
        {status.map(duru => {
          let color = duru === "onaylandı" ? "green" : "#91d5ff";
          if (duru === "Reddedildi") {
            color = "volcano";
          }
          return (
            <Tag key={duru._id} color={color} key={duru}>
              {duru.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  }
];

class HourlyTab extends Component {
  render() {
    const { hourly } = this.props;
    console.log("hourly ", hourly);

    return <Table rowKey="_id" columns={columns} dataSource={hourly.data} />;
  }
}

export default HourlyTab;
