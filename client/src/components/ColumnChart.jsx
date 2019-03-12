import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { positionAnalytic } from "../services/Analytics";

am4core.useTheme(am4themes_animated);

class ColumnChart extends Component {
  constructor(props) {
    super(props);
    this.state = { positions: [] };
  }

  componentDidMount() {
    positionAnalytic().then(res => {
      chart.data = res.data;
      console.log(res.data);
    });
    let chart = am4core.create("chartdiv2", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0;
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "_id";
    categoryAxis.renderer.labels.template.horizontalCenter = "left";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 40;
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 20;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.minGridDistance = 30;
    // axis break
    let axisBreak = valueAxis.axisBreaks.create();
    axisBreak.startValue = 2100;
    axisBreak.endValue = 22900;
    axisBreak.breakSize = 0.005;

    // make break expand on hover
    let hoverState = axisBreak.states.create("hover");
    hoverState.properties.breakSize = 1;
    hoverState.properties.opacity = 0.1;
    hoverState.transitionDuration = 1500;

    axisBreak.defaultState.transitionDuration = 1000;
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "_id";
    series.dataFields.valueY = "count";
    series.columns.template.tooltipText = "{valueY.value}";
    series.columns.template.tooltipY = 0;
    series.columns.template.strokeOpacity = 0;
    series.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
  }

  render() {
    return <div id="chartdiv2" style={{ width: "100%", height: "100%" }} />;
  }
}

export default ColumnChart;
