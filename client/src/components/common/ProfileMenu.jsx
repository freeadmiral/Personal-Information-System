import React, { Component } from "react";
import { Drawer, Avatar, Divider, Col, Row, Button } from "antd";

class ProfileMenu extends Component {
  state = { visible: false, currentUser: {}, isLoading: true };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    const { currentUser } = this.props;
    const pStyle = {
      fontSize: 16,
      color: "rgba(0,0,0,0.85)",
      lineHeight: "24px",
      display: "block",
      marginBottom: 16
    };
    const DescriptionItem = ({ title, content }) => (
      <div
        style={{
          fontSize: 14,
          lineHeight: "22px",
          marginBottom: 7,
          color: "rgba(0,0,0,0.65)"
        }}
      >
        <p
          style={{
            marginRight: 8,
            display: "inline-block",
            color: "#1890ff"
          }}
        >
          {title}:
        </p>
        {content}
      </div>
    );

    return (
      <div style={{ maxWidth: "300px" }}>
        <a onClick={this.showDrawer}>
          <Avatar
            size={75}
            src={currentUser.img}
          />
          <Button size="small" style={{ marginLeft: 16, verticalAlign: 'middle' }} onClick={this.showDrawer}>
            {currentUser.name + " " + currentUser.surname}
          </Button>
        </a>

        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <h3 style={{ ...pStyle, marginBottom: 24 }}>Bilgilerim</h3>
          <b style={pStyle}>Personel</b>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Ad Soyad" content={currentUser.name + " " + currentUser.surname} />{" "}
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="Account"
                content={currentUser.email}
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="İl" content={currentUser.city} />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Ülke" content={currentUser.country} />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Doğum Yılı" content={currentUser.birthDate} />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Web Sitesi" content={currentUser.website} />
            </Col>
          </Row>
          <Divider />
          <b style={pStyle}>Şirket</b>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Pozisyon" content={currentUser.position} />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Kabiliyetler" content={currentUser.responsibilites} />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Departman" content={currentUser.department} />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Supervisor" content={<a>{currentUser.supervisor}</a>} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Yetenekler"
                content={currentUser.skills}
              />
            </Col>
          </Row>
          <Divider />
          <b style={pStyle}>İletişim</b>
          <Row>
            <Col span={12}>
              <DescriptionItem title="E-Posta" content={currentUser.email} />
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="Telefon Numarası"
                content={currentUser.phoneNumber}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Linkedın"
                content={
                  <a href={currentUser.socialMedia}>
                    Hesaba git
                  </a>
                }
              />
            </Col>
          </Row>
        </Drawer>
      </div>
    );
  }
}

export default ProfileMenu;
