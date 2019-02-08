import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import { Row, Col, Card, Calendar } from "antd";

class Dashboard extends Component {
  state = {
    username: "",
    position: ""
  };

  componentDidMount() {
    const token = localStorage.token;
    const decoded = jwtDecode(token);
    this.setState({
      username: decoded.username,
      position: decoded.position
    });
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Row>
          <Col span={4} offset="1">
            <Card
              title={this.state.username}
              style={{ height: 350, width: 300 }}
            >
              <p>{this.state.position}</p>
            </Card>
          </Col>
          <Col span={12} offset="1">
            <Card style={{ height: 320 }} />
          </Col>
          <Col span={4} offset="1">
            <Calendar
              fullscreen={false}
              style={{
                width: 300,
                border: "1px solid #d9d9d9",
                borderRadius: 4,
                background: "white"
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Card />
          </Col>
          <Col span={8}>
            <Card />
          </Col>
          <Col span={8}>
            <Card />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Card />
          </Col>
          <Col span={6}>
            <Card />
          </Col>
          <Col span={6}>
            <Card />
          </Col>
          <Col span={6}>
            <Card />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
