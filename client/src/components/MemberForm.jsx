import React, { Component } from "react";
import { Form, message } from "antd";
import { getUserDetails } from "../services/getUserDetails";
import { updateUser } from "../services/updateUser";
import "../App.css";
import SubMemberForm from "./common/SubMemberForm";
import moment from "moment";

const success = () => {
  message.success("Başarıyla güncellendi");
};
const error = () => {
  message.error("There is an error");
};
const dateFormat = "YYYY/MM/DD";

class MemberForm extends SubMemberForm {
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
      console.log(res.data);

      this.props.form.setFieldsValue({
        name: this.state.user.name,
        surname: this.state.user.surname,
        username: this.state.user.username,
        birthDate: moment(this.state.user.birthDate, dateFormat),
        password: this.state.user.password,
        department: this.state.user.department,
        entryDate: moment(this.state.user.entryDate, dateFormat),
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
}

export default Form.create()(MemberForm);
