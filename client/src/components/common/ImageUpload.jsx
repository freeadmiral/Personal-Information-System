import React, { Component } from "react";
import { Upload, Icon, Form } from "antd";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

class ImageUpload extends Component {
  state = {
    loading: false
  };

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    const { imageUrl } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <Form.Item>
        {getFieldDecorator("logo", {
          rules: [{ required: true, message: "Bu alan zorunludur" }]
        })(
          <Upload
            name="logo"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
          >
            {imageUrl ? (
              <img style={{ width: 100 }} src={imageUrl} alt="logo" />
            ) : (
              uploadButton
            )}
          </Upload>
        )}
      </Form.Item>
    );
  }
}

export default Form.create()(ImageUpload);
