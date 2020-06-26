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

declare const TradingView: any;

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
  // chart: any;
  // chart2: any;
  // chart3: any;
  tradingView: any;

  @ViewChild("container1", { static: false }) containerDiv1: ElementRef;
  @ViewChild("container2", { static: false }) containerDiv2: ElementRef;
  @ViewChild("container3", { static: false }) containerDiv3: ElementRef;
  ngAfterViewInit() {
    // this.chartData = [];
    // var options = {
    //   type: "line",
    //   data: {
    //     datasets: [
    //       {
    //         label: "Data",
    //         borderColor: "green",
    //         data: [
    //           {
    //             x: moment(),
    //             y: 501
    //           },
    //           {
    //             x: moment()
    //               .clone()
    //               .add(1, "minute"),
    //             y: 500
    //           },
    //           {
    //             x: moment()
    //               .clone()
    //               .add(2, "minute"),
    //             y: 503
    //           },
    //           {
    //             x: moment()
    //               .clone()
    //               .add(3, "minute"),
    //             y: 499
    //           }
    //         ],
    //         fill: false,
    //         radius: 0
    //       }
    //     ]
    //   },
    //   options: {
    //     scales: {
    //       xAxes: [
    //         {
    //           type: "time",
    //           time: {
    //             displayFormats: {
    //               hour: "hA"
    //             }
    //           }
    //         }
    //       ]
    //     }
    //   }
    // };
    // this.chart = this.drawChart(this.myChart.nativeElement, options);
    // this.chart2 = this.drawChart(this.myChart2.nativeElement, options);
    // this.chart3 = this.drawChart(this.myChart3.nativeElement, options);
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

    this.drawStockChart(this.containerDiv1.nativeElement, settings);
    this.drawStockChart(this.containerDiv2.nativeElement, settings);
    this.drawStockChart(this.containerDiv3.nativeElement, settings);
  }

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
}
