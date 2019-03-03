import React, { Component } from "react";
import { Form, Input } from "antd";
import { getCompany } from "../services/getCompany";
import { decodedToken } from "../services/decodeToken";

const CustomizedForm = Form.create({
  name: "global_state",
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      name: Form.createFormField({
        ...props.name,
        value: props.name.value
      }),
      logo: Form.createFormField({
        ...props.logo,
        value: props.logo.value
      })
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  }
})(props => {
  const { getFieldDecorator } = props.form;
  return (
    <Form layout="inline">
      <Form.Item label="Firma Adı">
        {getFieldDecorator("name", {
          rules: [{ required: true, message: "Firma adı zorunludur" }]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="isim">
        {getFieldDecorator("logo", {
          rules: [{ required: true, message: "Firma adı zorunludur" }]
        })(<Input />)}
      </Form.Item>
    </Form>
  );
});

class CompanySettings extends Component {
  state = {
    fields: {
      name: {
        value: ""
      },
      logo: {
        value: ""
      }
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };

  handleFormChange = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields }
    }));
  };

  componentDidMount() {
    const decoded = decodedToken();
    getCompany(decoded.username).then(res => {
      this.setState({ fields: res.data[0] });
    });
  }
  render() {
    console.log(this.state.fields);
    const fields = this.state.fields;
    return (
      <div>
        <CustomizedForm {...fields} onChange={this.handleFormChange} />
      </div>
    );
  }
}

export default Form.create()(CompanySettings);
