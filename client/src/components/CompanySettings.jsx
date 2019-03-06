import React, { Component } from "react";
import { Input, Form, Icon, Button, message, Upload } from "antd";
import { getCompany } from "./../services/getCompany";
import { decodedToken } from "./../services/decodeToken";
import { updateCompany } from "./../services/updateCompany";
import ImageUpload from "./common/ImageUpload";

const success = () => {
  message.success("Başarıyla güncellendi");
};
const error = () => {
  message.error("There is an error");
};

class CompanySettings extends Component {
  constructor(props) {
    super(props);
    this.state = { company: {} };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      debugger;
      if (!err) {
        // updateCompany(values, this.state.company._id);
        // success();
        debugger;
        console.log("values ", values);
      } else {
        error();
      }
    });
  };

  componentDidMount() {
    const decoded = decodedToken();
    getCompany(decoded.username).then(res => {
      this.setState({ company: res.data[0] });
    });
    let imagelist = [
      {
        uid: "12312",
        name: "",
        status: "accept",
        url: this.state.company.logo,
        size: 10,
        type: ""
      }
    ];
    this.props.form.setFieldsValue({
      name: "fhdskf",
      profilePicturePath: imagelist
    });
  }

  beforeUpload(file) {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      throw message.error("PictureSize2MBMessage");
    }

    return true;
  }
  normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };
  render() {
    const fileList = this.props.form.getFieldValue("profilePicturePath");
    const { getFieldDecorator } = this.props.form;
    const { company } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          Firma
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          )}
        </Form.Item>
        <Form.Item
          label={"Picture"}
          required={false}
          labelCol={{ xs: { span: 5 }, sm: { span: 5 } }}
          wrapperCol={{ xs: { span: 19 }, sm: { span: 19 } }}
        >
          {getFieldDecorator("profilePicturePath", {
            rules: [
              {
                required: true,
                message: "RequiredFieldWarning",
                type: "array"
              }
            ],

            getValueFromEvent: this.normFile,
            trigger: "onChange"
          })(
            <Upload
              name="logo"
              listType="picture-card"
              multiple={false}
              fileList={fileList == undefined ? [] : fileList}
              showUploadList={true}
              withCredentials={false}
              beforeUpload={this.beforeUpload}
              onChange={this.props.onButtonDisable}
              accept={".jpg,.jpeg,.png"}
            >
              {fileList == undefined || fileList.length == 0 ? (
                <Button>
                  <Icon type="upload" /> {"Upload"}
                </Button>
              ) : null}
            </Upload>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Güncelle
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(CompanySettings);
