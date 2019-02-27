import React, { Component } from "react";
import { Table, Tag } from "antd";

const columns = [
  {
    title: "Çıkış Tarihi",
    dataIndex: "leaveDate",
    _id: "leaveDate"
  },
  {
    title: "Dönüş Tarihi",
    dataIndex: "entryDate",
    _id: "entryDate"
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
          if (duru === "REDDEDILDI") {
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

class TableonTab extends Component {
  render() {
    const { vacationData } = this.props;
    console.log("tableonTab ", vacationData);
    return (
      <Table rowKey="_id" columns={columns} dataSource={vacationData.data} />
    );
  }
}

export default TableonTab;
