import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  initChart = () => {
    let chart = am4core.create("chartdiv1", am4charts.PieChart);
    chart.innerRadius = am4core.percent(50);
    chart.data = this.props.cityAnalytic;
    console.log(this.props);
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "count";
    pieSeries.dataFields.category = "_id";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
  };
  componentWillReceiveProps() {
    this.initChart();
  }

  render() {
    return <div id="chartdiv1" style={{ width: "100%", height: "100%" }} />;
  }
}

export default PieChart;
