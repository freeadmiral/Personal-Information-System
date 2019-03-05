import React, { Component } from "react";
import { Input, Form, Icon, Button } from "antd";
import { getCompany } from "./../services/getCompany";
import { decodedToken } from "./../services/decodeToken";
import { updateCompany } from "./../services/updateCompany";

class CompanySettings extends Component {
  constructor(props) {
    super(props);
    this.state = { company: {} };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        updateCompany(values, this.state.company._id);
      }
    });
  };

  componentDidMount() {
    const decoded = decodedToken();
    getCompany(decoded.username).then(res => {
      this.setState({ company: res.data[0] });
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { company } = this.state;
    console.log(company);
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          Firma
          {getFieldDecorator("name", {
            initialValue: company.name,
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(CompanySettings);
