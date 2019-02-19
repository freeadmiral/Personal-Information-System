import React, { Component } from "react";
import { Table, Divider, Tag } from "antd";

const columns = [
  {
    title: "Çıkış Tarihi",
    dataIndex: "Ctarih",
    key: "Ctarih",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "Dönüş Tarihi",
    dataIndex: "Dtarih",
    key: "Dtarih"
  },
  {
    title: "İzin Türü",
    dataIndex: "tur",
    key: "tur"
  },
  {
    title: "Adres",
    dataIndex: "adres",
    key: "adres"
  },
  {
    title: "Durum",
    key: "durum",
    dataIndex: "durum",
    render: durum => (
      <span>
        {durum.map(duru => {
          let color = duru === "Onaylandı" ? "green" : "#91d5ff";
          if (duru === "Reddedildi") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={duru}>
              {duru.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    Ctarih: "John Brown",
    Dtarih: 32,
    tur: "yıllık",
    adres: "New York No. 1 Lake Park",
    durum: ["Onaylandı"]
  },
  {
    key: "2",
    Ctarih: "Jim Green",
    Dtarih: 42,
    tur: "yıllık",
    adres: "London No. 1 Lake Park",
    durum: ["Reddedildi"]
  },
  {
    key: "3",
    Ctarih: "Joe Black",
    Dtarih: 32,
    tur: "yıllık",
    adres: "Sidney No. 1 Lake Park",
    durum: ["Beklemede"]
  }
];

class TableonTab extends Component {
  render() {
    return <Table columns={columns} dataSource={data} />;
  }
}

export default TableonTab;
