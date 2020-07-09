import {
  Component,
  ViewEncapsulation,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Chart, Point } from "chart.js";
import * as moment from "moment";
import { timeout } from "rxjs/operators";
import { ParseService } from "../../../parse.service";
import { data } from "./data";
import { zoomComplete, onZooming } from "@syncfusion/ej2-charts";
import * as CanvasJS from "canvasjs/dist/canvasjs.js";

declare const zingchart: any;

@Component({
  selector: "stocke-chart",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class OverviewComponent implements AfterViewInit {
  chart: any;
  tradingView: any;
  mI = [];
  vnData = [];
  hnxData = [];
  upData = [];
  klGiaodichVnx: any;
  gtGiaodichVnx: any;
  klGiaodichHnx: any;
  gtGiaodichHnx: any;
  klGiaodichUp: any;
  gtGiaodichUp: any;

  @ViewChild("stockChartVN", { static: false }) stockChartVN: ElementRef;
  @ViewChild("stockChartHN", { static: false }) stockChartHN: ElementRef;
  @ViewChild("stockChartUP", { static: false }) stockChartUP: ElementRef;

  constructor(private parseService: ParseService) {}

  async ngAfterViewInit() {
    try {
      this.mI = await this.parseService.getMI();
    } catch (ex) {
      console.log(ex);
    }
    if (this.mI && this.mI.length) {
      // this.vnData = this.getChartData(this.mI, "10");
      this.klGiaodichVnx = this.getNewestData(this.mI, "10");
      this.gtGiaodichVnx = this.getNewestData(this.mI, "10");
      this.klGiaodichHnx = this.getNewestData(this.mI, "02");
      this.gtGiaodichHnx = this.getNewestData(this.mI, "02");
      this.klGiaodichUp = this.getNewestData(this.mI, "03");
      this.gtGiaodichUp = this.getNewestData(this.mI, "03");

      // this.hnxData = this.getChartData(this.mI, "02");
      // this.upData = this.getChartData(this.mI, "03");
    }
    // this.renderChart("myChartUP", this.upData);
    // this.renderChart("myChartHNX", this.hnxData);
    // this.renderChart("myChartVN", this.vnData);

    //---------------------VN_IDX--------------
    let stockChartVN = {
      type: "line",
      data: {
        datasets: [
          {
            borderColor: "green",
            data: this.mI
              .filter(fCode => {
                return fCode.get("floorCode") === "10";
              })
              .map(item => {
                return {
                  x:
                    moment().format("YYYY-MM-DD") +
                    "T" +
                    item.get("tradingTime") +
                    "+07:00",
                  y: item.get("marketIndex")
                };
              }),
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

    this.drawChart(this.stockChartVN.nativeElement, stockChartVN);

    //---------------------HN_IDX--------------
    let stockChartHN = {
      type: "line",
      data: {
        datasets: [
          {
            borderColor: "green",
            data: this.mI
              .filter(fCode => {
                return fCode.get("floorCode") === "02";
              })
              .map(item => {
                return {
                  x:
                    moment().format("YYYY-MM-DD") +
                    "T" +
                    item.get("tradingTime") +
                    "+07:00",
                  y: item.get("marketIndex")
                };
              }),
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

    this.drawChart(this.stockChartHN.nativeElement, stockChartHN);

    //---------------------UP_IDX--------------

    let stockChartUP = {
      type: "line",
      data: {
        datasets: [
          {
            borderColor: "green",
            data: this.mI
              .filter(fCode => {
                return fCode.get("floorCode") === "03";
              })
              .map(item => {
                return {
                  x:
                    moment().format("YYYY-MM-DD") +
                    "T" +
                    item.get("tradingTime") +
                    "+07:00",
                  y: item.get("marketIndex")
                };
              }),
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

    this.drawChart(this.stockChartUP.nativeElement, stockChartUP);
  }

  // getChartData(data, floorCode) {
  //   return data
  //     .filter(res => {
  //       return res.get("floorCode") === floorCode;
  //     })
  //     .map(value => {
  //       return [
  //         parseInt(
  //           moment(
  //             `${moment().format("YYYY-MM-DD")}T${value.get(
  //               "tradingTime"
  //             )}+07:00`
  //           ).format("x")
  //         ),
  //         parseFloat(value.get("marketIndex"))
  //       ];
  //     });
  // }

  async ngOnInit() {}

  getNewestData(data: Array<any>, floorCode: string) {
    let result = data.filter(item => {
      return item.get("floorCode") === floorCode;
    });
    if (result && result.length) {
      return result[result.length - 1];
    } else {
      return "";
    }
  }

  // renderChart(id, values) {
  //   var config = {
  //     type: "line",
  //     scaleX: {
  //       transform: {
  //         type: "date",
  //         all: "%h:%i %A"
  //       },
  //       plot: {
  //         marker: [
  //           {
  //             type: "line"
  //           },
  //           {
  //             type: "area",
  //             range: [
  //               moment(
  //                 `${moment().format("YYYY-MM-DD")}T12:00:00+07:00`
  //               ).format("x"),
  //               moment(
  //                 `${moment().format("YYYY-MM-DD")}T15:00:00+07:00`
  //               ).format("x")
  //             ]
  //           }
  //         ]
  //       }
  //     },
  //     scaleY: {
  //       zooming: true,
  //       // values: "50:60:2",
  //       guide: {
  //         "line-style": "dotted"
  //       }
  //     },
  //     series: [
  //       {
  //         values: values
  //       }
  //     ]
  //   };
  //   zingchart.render({
  //     id: id,
  //     data: config,
  //     height: 400,
  //     width: "100%"
  //   });
  //   stockChart.render({
  //     id: id,
  //     data: stockChart,
  //     height: 400,
  //     width: "100%"
  //   });
  // }
  // }
  drawChart(ctx, options) {
    return new Chart(ctx, options);
  }
  //-------------------------------------------------------------------------------------------
}
