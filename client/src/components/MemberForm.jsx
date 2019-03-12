import React, { Component } from "react";
import {
  Layout,
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Breadcrumb,
  Button,
  message,
  Card,
  Row,
  Col,
  Avatar
} from "antd";
import ProfileMenu from "./common/ProfileMenu";
import SidebarMenu from "./common/SidebarMenu";
import { getUserDetails } from "../services/getUserDetails";
import { updateUser } from "../services/updateUser";
import "../App.css";

const { Option } = Select;
const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const success = () => {
  message.success("Başarıyla güncellendi");
};
const error = () => {
  message.error("There is an error");
};

class MemberForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        updateUser(values, this.state.user._id);
        success();
      } else {
        error();
      }
    });
  };

  componentDidMount() {
    getUserDetails(this.props.match.params.username).then(res => {
      this.setState({ user: res.data[0] });
      this.props.form.setFieldsValue({
        name: this.state.user.name,
        surname: this.state.user.surname,
        username: this.state.user.username,
        // birthDate: moment(this.state.user.birthDate).format("YYYY-MM-DD"),
        password: this.state.user.password,
        department: this.state.user.department,
        // entryDate: moment(this.state.user.entryDate).format("YYYY-MM-DD"),
        position: this.state.user.position,
        gender: this.state.user.gender,
        registraitonNo: this.state.user.registraitonNo,
        responsibilites: this.state.user.responsibilites,
        country: this.state.user.country,
        city: this.state.user.city,
        website: this.state.user.website,
        email: this.state.user.email,
        phoneNumber: this.state.user.phoneNumber,
        skills: this.state.user.skills
      });
    });
  }

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
                  <Col span={4}>
                    <Avatar
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.5) 0px 1px 10px 0px"
                      }}
                      size={150}
                      src={user.img}
                    />
                  </Col>
                  <Col span={2}>
                    <Card
                      style={{
                        textAlign: "center",
                        width: 300,
                        boxShadow: "rgba(0, 0, 0, 0.5) 0px 1px 10px 0px"
                      }}
                    >
                      {" "}
                      <h2>{user.name + " " + user.surname}</h2>
                      <br />
                      <h1>{user.department + "-" + user.position}</h1>
                    </Card>
                  </Col>
                </Row>
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
                                message: "Please input your E-mail!"
                              }
                            ]
                          })(<Input />)}
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="Soyad">
                          {getFieldDecorator("surname", {
                            rules: [
                              {
                                required: true,
                                message: "Please input your E-mail!"
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
                                message: "Please input your E-mail!"
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
                                message: "Please input your E-mail!"
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
                                message: "Please input your E-mail!"
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
                                message: "Please input your E-mail!"
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
                                message: "Please select your gender!"
                              }
                            ]
                          })(
                            <Select placeholder="Select a option and change input text above">
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
                                message: "Please input your E-mail!"
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
                                message: "Please input your E-mail!"
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
                                message: "Please input your E-mail!"
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
                                message: "Please input your phone number!"
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

export default Form.create()(MemberForm);
