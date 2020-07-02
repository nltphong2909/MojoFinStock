import {
  Component,
  AfterViewInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  OnInit,
  DoCheck
} from "@angular/core";
import * as moment from "moment";
import { timeout } from "rxjs/operators";
import { Chart, Point } from "chart.js";
import { Sparkline } from "@syncfusion/ej2-charts";
import { GridComponent } from "@syncfusion/ej2-angular-grids";
import { orderdata } from "./hsxsparkdatas";

declare const TradingView: any;
@Component({
  selector: "ngx-hsx",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./hsx.component.html",
  styleUrls: ["./hsx.component.scss"]
})
export class HsxComponent implements AfterViewInit, OnInit, DoCheck {
  // public lineData: object[] = [
  //   [0, 6, -4, 1, -3, 2, 5],
  //   [5, -4, 6, 3, -1, 2, 0],
  //   [6, 4, 0, 3, -2, 5, 1],
  //   [4, -6, 3, 0, 1, -2, 5],
  //   [3, 5, -6, -4, 0, 1, 2],
  //   [1, -3, 4, -2, 5, 0, 6],
  //   [2, 4, 0, -3, 5, -6, 1],
  //   [5, 4, -6, 3, 1, -2, 0],
  //   [0, -6, 4, 1, -3, 2, 5],
  //   [6, 4, 0, -3, 2, -5, 1],
  //   [4, 6, -3, 0, 1, 2, 5],
  //   [3, -5, -6, 4, 0, 1, 2]
  // ];
  // public columnData: Object[] = [
  //   [0, 6, -4, 1, -3, 2, 5],
  //   [5, -4, 6, 3, -1, 2, 0],
  //   [6, 4, 0, 3, -2, 5, 1],
  //   [4, -6, 3, 0, 1, -2, 5],
  //   [3, 5, -6, -4, 0, 1, 2],
  //   [1, -3, 4, -2, 5, 0, 6],
  //   [2, 4, 0, -3, 5, -6, 1],
  //   [5, 4, -6, 3, 1, -2, 0],
  //   [0, -6, 4, 1, -3, 2, 5],
  //   [6, 4, 0, -3, 2, -5, 1],
  //   [4, 6, -3, 0, 1, 2, 5],
  //   [3, -5, -6, 4, 0, 1, 2]
  // ];
  // tslint:disable
  public griddata: object[] = [];
  // public getSparkData(type: string, count: number): number[] {
  //   if (type === "line") {
  //     return this.lineData[count] as number[];
  //   } else {
  //     return this.columnData[count] as number[];
  //   }
  // }

  ngOnInit() {
    this.griddata = orderdata;
  }
  chartData: Array<Point> = [];
  chart: any;

  tradingView: any;
  constructor() {}

  @ViewChild("myChart", { static: false }) myChart: ElementRef;
  @ViewChild("myChart1", { static: false }) myChart1: ElementRef;
  @ViewChild("myChart2", { static: false }) myChart2: ElementRef;

  @ViewChild("mybarChart", { static: false }) mybarChart: ElementRef;
  @ViewChild("mybarChart1", { static: false }) mybarChart1: ElementRef;
  @ViewChild("mybarChart2", { static: false }) mybarChart2: ElementRef;

  @ViewChild("sparkgrid1", { static: false }) gridCmp: ElementRef;

  // @ViewChild("container", { static: false }) containerDiv: ElementRef;
  // @ViewChild("container1", { static: false }) containerDiv1: ElementRef;
  // @ViewChild("container2", { static: false }) containerDiv2: ElementRef;

  ngAfterViewInit(): void {
    this.chartData = [];
    var options = {
      type: "line",
      data: {
        datasets: [
          {
            borderColor: "green",
            data: [
              {
                x: moment(),
                y: 500000
              },
              {
                x: moment()
                  .clone()
                  .add(1, "minute"),
                y: 2000000
              },
              {
                x: moment()
                  .clone()
                  .add(2, "minute"),
                y: 1500000
              },
              {
                x: moment()
                  .clone()
                  .add(3, "minute"),
                y: 1000000
              }
            ],
            fill: false,
            radius: 0
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                displayFormats: {
                  hour: "hA"
                }
              }
            }
          ]
        }
      }
    };

    this.chart = this.drawChart(this.myChart.nativeElement, options);
    this.chart = this.drawChart(this.myChart1.nativeElement, options);
    this.chart = this.drawChart(this.myChart2.nativeElement, options);

    const settings = {
      width: "1000",
      height: "900",
      defaultColumn: "overview",
      defaultScreen: "general",
      market: "forex",
      showToolbar: true,
      colorTheme: "light",
      locale: "vi_VN"
    };
    // this.drawStockChart(this.containerDiv.nativeElement, settings);
    // this.drawStockChart(this.containerDiv1.nativeElement, settings);
    // this.drawStockChart(this.containerDiv2.nativeElement, settings);
    // this.drawChart(this.mybarChart.nativeElement, {
    var optionsBarChart = {
      type: "bar",
      data: {
        labels: ["Tăng", "Giảm", "Không đổi"],
        datasets: [
          {
            data: [2517.1, 375.9, 80.1],
            backgroundColor: ["Green", "Red", "Yellow"]
          }
        ]
      },

      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                callback: function(value, index, values) {
                  return `${value} tỷ`;
                }
              }
            }
          ]
        }
      }
    };
    this.chart = this.drawChart(this.mybarChart.nativeElement, optionsBarChart);
    this.chart = this.drawChart(
      this.mybarChart1.nativeElement,
      optionsBarChart
    );
    this.chart = this.drawChart(
      this.mybarChart2.nativeElement,
      optionsBarChart
    );
  }
  drawChart(ctx, options) {
    return new Chart(ctx, options);
  }

  ngDoCheck() {
    // var optionsSparkLine = {}
    this.griddata.forEach((data: any) => {
      const ele = document.querySelector("#spkline_" + data.EmployeeID);
      const ele2 = document.querySelector("#spkline2_" + data.EmployeeID);
      const ele3 = document.querySelector("#spkline3_" + data.EmployeeID);
      if (ele && !ele.innerHTML) {
        let line: Sparkline = new Sparkline({
          height: "20px",
          width: "100%",
          lineWidth: 1,
          valueType: "Numeric",
          fill: "green",
          dataSource: data.SparkLineData
        });
        line.appendTo("#spkline_" + data.EmployeeID);
      }
      if (ele2 && !ele2.innerHTML) {
        let line: Sparkline = new Sparkline({
          height: "20px",
          width: "100%",
          lineWidth: 1,
          valueType: "Numeric",
          fill: "green",
          dataSource: data.SparkLineData
        });
        line.appendTo("#spkline2_" + data.EmployeeID);
      }
      if (ele3 && !ele3.innerHTML) {
        let line: Sparkline = new Sparkline({
          height: "20px",
          width: "100%",
          lineWidth: 1,
          valueType: "Numeric",
          fill: "green",
          dataSource: data.SparkLineData
        });
        line.appendTo("#spkline3_" + data.EmployeeID);
      }
    });
  }

  // drawStockChart(ctx: HTMLElement, options: any) {
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
  //   script.async = true;
  //   script.id = "tradingview_mini_chart";
  //   script.innerHTML = JSON.stringify(options);
  //   ctx.appendChild(script);
  // }
}
