import React, { Component } from "react";
import ProfileMenu from "../common/ProfileMenu";
import SidebarMenu from "../common/SidebarMenu";
import {
  Layout,
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Button,
  Card,
  Row,
  Col
} from "antd";

const { Option } = Select;
const { Header, Footer } = Layout;

class SubMemberForm extends Component {
  state = {};
  render() {
    const gridStyle = {
      width: "80%",
      height: "100%",
      boxShadow: "rgba(0, 0, 0, 0.5) 0px 1px 10px 0px",
      marginLeft: 150,
      background: "#fff"
    };
    const { getFieldDecorator } = this.props.form;
    const { user } = this.state;
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "+90"
    })(
      <Select style={{ width: 70 }}>
        <Option value="+90">+90</Option>
      </Select>
    );

    return (
      <div>
        <Layout style={{ minHeight: "100vh" }}>
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
            <div style={{ padding: 24, minHeight: 360 }}>
              <Card.Grid style={gridStyle}>
                <Row>
                  {" "}
                  <Form onSubmit={this.handleSubmit}>
                    <Row gutter={8}>
                      <Col span={8}>
                        <Form.Item label="Ad">
                          {getFieldDecorator("name", {
                            rules: [
                              {
                                required: true,
                                message: "Bu alan zorunludur"
                              }
                            ]
                          })(<Input placeholder={this.label} />)}
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="Soyad">
                          {getFieldDecorator("surname", {
                            rules: [
                              {
                                required: true,
                                message: "Bu alan zorunludur"
                              }
                            ]
                          })(<Input />)}
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="Kullanıcı Adı">
                          {getFieldDecorator("username", {
                            rules: [
                              {
                                required: true,
                                message: "Bu alan zorunludur"
                              }
                            ]
                          })(<Input />)}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={8}>
                      <Col span={8}>
                        <Form.Item label="Doğum Tarihi">
                          {getFieldDecorator("birthDate")(<DatePicker />)}
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="e-posta">
                          {getFieldDecorator("email", {
                            rules: [
                              {
                                type: "email",
                                required: true,
                                message: "Bu alan zorunludur"
                              }
                            ]
                          })(<Input />)}
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="Departman">
                          {getFieldDecorator("department", {
                            rules: [
                              {
                                required: true,
                                message: "Bu alan zorunludur"
                              }
                            ]
                          })(<Input />)}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={8}>
                      <Col span={8}>
                        <Form.Item label="Giriş Tarihi">
                          {getFieldDecorator("entryDate")(<DatePicker />)}
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="Pozisyon">
                          {getFieldDecorator("position", {
                            rules: [
                              {
                                required: true,
                                message: "Bu alan zorunludur"
                              }
                            ]
                          })(<Input />)}
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="Gender">
                          {getFieldDecorator("gender", {
                            rules: [
                              {
                                required: true,
                                message: "Bu alan zorunludur"
                              }
                            ]
                          })(
                            <Select placeholder="Seçiniz">
                              <Option value="erkek">Erkek</Option>
                              <Option value="bayan">Bayan</Option>
                            </Select>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={8}>
                      <Col span={8}>
                        <Form.Item label="ülke">
                          {getFieldDecorator("country", {
                            rules: [
                              {
                                required: true,
                                message: "Bu alan zorunludur"
                              }
                            ]
                          })(<Input />)}
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="şehir">
                          {getFieldDecorator("city", {
                            rules: [
                              {
                                required: true,
                                message: "Bu alan zorunludur"
                              }
                            ]
                          })(<Input />)}
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="website">
                          {getFieldDecorator("website", {
                            rules: [
                              {
                                required: true,
                                message: "Bu alan zorunludur"
                              }
                            ]
                          })(<Input />)}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row gutter={8}>
                      <Col span={8}>
                        <Form.Item label="Phone Number">
                          {getFieldDecorator("phoneNumber", {
                            rules: [
                              {
                                required: true,
                                message: "Bu alan zorunludur"
                              }
                            ]
                          })(
                            <Input
                              addonBefore={prefixSelector}
                              style={{ width: "100%" }}
                            />
                          )}
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="InputNumber">
                          {getFieldDecorator("registraitonNo")(<InputNumber />)}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item label="responsibilities">
                      {getFieldDecorator("responsibilites", {
                        rules: [
                          { required: true, message: "Bu alan zorunludur" }
                        ]
                      })(<Input.TextArea rows={4} />)}
                    </Form.Item>
                    <Form.Item label="skills">
                      {getFieldDecorator("skills", {
                        rules: [
                          { required: true, message: "Bu alan zorunludur" }
                        ]
                      })(<Input.TextArea rows={4} />)}
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Güncelle
                      </Button>
                    </Form.Item>
                  </Form>
                </Row>
              </Card.Grid>
            </div>
            <Footer style={{ textAlign: "center" }}>
              Personel Bilgi Sistemi ©2019 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default SubMemberForm;
