import React, { Component } from "react";
import SubMemberForm from "./common/SubMemberForm";
import { Form } from "antd";

class NewMemberForm extends SubMemberForm {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    console.log("new member");
  };
}

export default Form.create()(NewMemberForm);
