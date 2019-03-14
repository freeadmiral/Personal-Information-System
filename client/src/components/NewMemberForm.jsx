import React, { Component } from "react";
import SubMemberForm from "./common/SubMemberForm";
import { Form } from "antd";
import { createUser } from "./../services/createUser";

class NewMemberForm extends SubMemberForm {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) return createUser(values);
    });
  };
}

export default Form.create()(NewMemberForm);
