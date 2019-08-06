import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  public options: any = {
    chart: {
      type: 'area'
    },
    title: {
      align: 'left',
      style: {
        fontSize: '12px'
      },
      text: 'View for Entire Site'
    },
    subtitle: {
      text: ''
    },
    tooltip: {
      pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    xAxis: {
      categories: ['April 2019', 'May 2019', 'June 2019']
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
      }
    },
    credits: false,
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1]
    }]
  };

  public options1: any = {
    chart: {
      type: 'column'
    },
    title: {
      style: {
        color: 'rgb(48, 47, 47)',
        fontSize: '12px'
      },
      align: 'left',
      text: 'Trending Categories'
    },
    subtitle: {
      text: ''
    },
    tooltip: {
      pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    xAxis: {
      categories: ['April', 'May', 'June', 'July', 'August']
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
      }
    },
    credits: false,
    series: [{
      name: 'John',
      data: [2, 3, 4, 5, 2]
    }]
  };
  status: boolean = false;

  constructor() { }

  ngOnInit() {
    Highcharts.chart('area-graph', this.options);
    Highcharts.chart('bar-graph', this.options1);
   
  }

  onClick() {
    this.status = !this.status;
  }
}
