import React, { Component } from 'react';
import { Calendar, Alert } from 'antd';
import moment from 'moment';

class HomeCalendar extends Component {
    state = { value: moment('2019-01-23'), selectedValue: moment('2019-01-23') };

    onSelect = (value) => {
        this.setState({
            value,
            selectedValue: value
        });
    }

    onPanelChange = (value) => {
        this.setState({ value })
    }

    render() {
        const { value, selectedValue } = this.state;
        return (<div style={{ paddingLeft: "10%" }}>
            <Alert message={`Seçili tarih: ${selectedValue && selectedValue.format('DD-MM-YYYY')}`} />
            <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} fullscreen={false} />
        </div>);
    }
}

export default HomeCalendar;