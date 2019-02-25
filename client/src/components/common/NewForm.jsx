import React, { Component } from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Icon
} from "antd";
import { newDailyVacation } from "../../services/getVacation";
import { decodedToken } from "./../../services/decodeToken";

const dateFormat = "MM/DD/YYYY";
const { Option } = Select;

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      userId: ""
    };
  }
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  hideDrawer = () => {
    this.setState({
      visible: false
    });
  };
  componentDidMount() {
    const userId = decodedToken();
    this.setState({ userId: userId._id });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) return newDailyVacation(values, this.state.userId);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          <Icon type="plus" /> Yeni Kayıt
        </Button>
        <Drawer
          title="Yeni İzin Talebi Oluştur"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          style={{
            overflow: "auto",
            height: "calc(100% - 108px)",
            paddingBottom: "108px"
          }}
        >
          <Form layout="vertical">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Tarih">
                  {getFieldDecorator("date", {
                    rules: [{ required: true, message: "Bu alan zorunludur" }]
                  })(
                    <DatePicker.RangePicker
                      format={dateFormat}
                      style={{ width: "100%" }}
                      getPopupContainer={trigger => trigger.parentNode}
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="İzin Tipi">
                  {getFieldDecorator("vacationType", {
                    rules: [{ required: true, message: "Bu alan zorunludur" }]
                  })(
                    <Select placeholder="izin tipini seçiniz">
                      <Option value="Doğum İzni">Doğum izni</Option>
                      <Option value="Evlilik İzni">Evlilik izni</Option>
                      <Option value="Sağlık İzni(Raporlu)">
                        Sağlık izni(Raporlu)
                      </Option>
                      <Option value="İdari İzin">İdari izin</Option>
                      <Option value="Ücretsiz İzin">Ücretsiz izin</Option>
                      <Option value="Yıllık İzin">Yıllık izin</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="İzne çıkış nedeni">
                  {getFieldDecorator("reason", {
                    rules: [{ required: true, message: "Bu alan zorunludur" }]
                  })(
                    <Input.TextArea
                      rows={4}
                      placeholder="Açıklama giriniz..."
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="İzinde bulunacağı adres">
                  {getFieldDecorator("address", {
                    rules: [{ required: true, message: "Bu alan zorunludur" }]
                  })(
                    <Input.TextArea rows={4} placeholder="Adres giriniz..." />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 90,
              width: "100%",
              borderTop: "1px solid #e9e9e9",
              padding: "10px 16px",
              background: "#fff",
              textAlign: "center"
            }}
          >
            <Button onClick={this.hideDrawer} style={{ marginRight: 8 }}>
              Vazgeç
            </Button>
            <Button onClick={this.handleSubmit} type="primary">
              Gönder
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Form.create()(NewForm);
