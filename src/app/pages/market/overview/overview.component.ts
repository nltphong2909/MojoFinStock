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

declare const TradingView: any;
declare const Highcharts: any;

/**
 * Sample for default stockchart
 */
@Component({
  selector: "stocke-chart",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class OverviewComponent implements AfterViewInit {
  chartData: Array<Point> = [];
  chart: any;
  // chart2: any;
  // chart3: any;
  tradingView: any;
  mI = [];

  @ViewChild("container1", { static: false }) containerDiv1: ElementRef;
  @ViewChild("container2", { static: false }) containerDiv2: ElementRef;
  @ViewChild("container3", { static: false }) containerDiv3: ElementRef;

  @ViewChild("myChart", { static: false }) myChart: ElementRef;

  async ngAfterViewInit() {
    const settings = {
      colorTheme: "light",
      dateRange: "12m",
      showChart: true,
      locale: "vi_VN",
      largeChartUrl: "",
      isTransparent: false,
      width: "100%",
      height: "800",
      plotLineColorGrowing: "rgba(56, 118, 29, 1)",
      plotLineColorFalling: "rgba(56, 118, 29, 1)",
      gridLineColor: "rgba(152, 152, 152, 1)",
      scaleFontColor: "rgba(0, 0, 0, 1)",
      belowLineFillColorGrowing: "rgba(255, 255, 255, 0.12)",
      belowLineFillColorFalling: "rgba(255, 255, 255, 0.12)",
      symbolActiveColor: "rgba(152, 152, 152, 0.12)",
      tabs: [
        {
          title: "Ngoại hối",
          symbols: [
            {
              s: "FX:EURUSD"
            },
            {
              s: "FX:GBPUSD"
            },
            {
              s: "FX:USDJPY"
            },
            {
              s: "FX:USDCHF"
            },
            {
              s: "FX:AUDUSD"
            },
            {
              s: "FX:USDCAD"
            }
          ],
          originalTitle: "Forex"
        }
      ]
    };

    // this.drawStockChart(this.containerDiv1.nativeElement, settings);
    this.drawStockChart(this.containerDiv2.nativeElement, settings);
    this.drawStockChart(this.containerDiv3.nativeElement, settings);

    this.chartData = [];
    this.mI = await this.parseService.getMI();
    if (this.mI && this.mI.length) {
      this.mI = this.mI.map(value => ({
        x: `${moment().format("YYYY-MM-DD")}T${value.get("tradingTime")}+07:00`,
        y: value.get("totalValueTraded")
      }));
    }
    console.log(this.mI);
    var options = {
      type: "line",
      data: {
        datasets: [
          {
            borderColor: "green",
            data: this.mI,
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
              type: "time"
            }
          ]
        }
      }
    };
    this.chart = this.drawChart(this.myChart.nativeElement, options);
    Highcharts.stockChart("container", {
      rangeSelector: {
        selected: 1
      },

      title: {
        text: "AAPL Stock Price"
      },

      series: [
        {
          name: "AAPL",
          data: data,
          tooltip: {
            valueDecimals: 2
          }
        }
      ]
    });
  }

  constructor(private parseService: ParseService) {}

  async ngOnInit() {}
  drawChart(ctx, options) {
    return new Chart(ctx, options);
  }

  drawStockChart(ctx: HTMLElement, options: any) {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    script.id = "tradingview_mini_chart";
    script.innerHTML = JSON.stringify(options);
    ctx.appendChild(script);
  }
  // chartData: Array<Point> = [];
  // ngAfterViewInit(): void {
  //   this.chartData = [];
  //   var options = {
  //     type: "line",
  //     data: {
  //       datasets: [
  //         {
  //           borderColor: "green",
  //           data: [
  //             {
  //               x: moment(),
  //               y: 500000
  //             },
  //             {
  //               x: moment()
  //                 .clone()
  //                 .add(1, "minute"),
  //               y: 2000000
  //             },
  //             {
  //               x: moment()
  //                 .clone()
  //                 .add(2, "minute"),
  //               y: 1500000
  //             },
  //             {
  //               x: moment()
  //                 .clone()
  //                 .add(3, "minute"),
  //               y: 1000000
  //             }
  //           ],
  //           fill: false,
  //           radius: 0
  //         }
  //       ]
  //     },
  //     options: {
  //       legend: {
  //         display: false
  //       },
  //       scales: {
  //         xAxes: [
  //           {
  //             type: "time",
  //             time: {
  //               displayFormats: {
  //                 hour: "hA"
  //               }
  //             }
  //           }
  //         ]
  //       }
  //     }
  //   };

  //   this.chart = this.drawChart(this.myChart.nativeElement, options);
  // }
  // drawChart(ctx, options) {
  //   return new Chart(ctx, options);
  // }
}
