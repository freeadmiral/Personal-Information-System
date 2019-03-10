import { Statistic, Row, Col } from "antd";
import React, { Component } from "react";

const Countdown = Statistic.Countdown;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

class CountDown extends Component {
  state = {};
  render() {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <Countdown title="Countdown" value={deadline} />
        </Col>
        <Col span={12}>
          <Countdown
            title="Million Seconds"
            value={deadline}
            format="HH:mm:ss:SSS"
          />
        </Col>
        <Col span={24} style={{ marginTop: 32 }}>
          <Countdown title="Gün-Ay-Yıl" value={deadline} format="DD-MM-YYY" />
        </Col>
      </Row>
    );
  }
}

export default CountDown;
