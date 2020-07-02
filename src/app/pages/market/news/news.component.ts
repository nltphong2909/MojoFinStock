import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ParseService } from "../../../parse.service";
import * as moment from "moment";
import * as Highcharts from "highcharts";
import { redrawElement } from "@syncfusion/ej2-charts";
import { Chart, Point } from "chart.js";
@Component({
  selector: "ngx-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
  news = [];

  placeholders = [];
  pageSize = 10;
  skip = 0;
  loading = false;

  columnDefs = [
    { headerName: "NGÀNH", field: "nganh", width: 300 },
    { headerName: "TỶ TRỌNG (%)", field: "tyTrong", width: 150 },
    { headerName: "BIẾN ĐỘNG", field: "bienDong", width: 350 }
  ];

  rowData = [
    { nganh: "Dầu khí", tyTrong: "5.43" },
    { nganh: "Vật liệu cơ bản", tyTrong: "14.34" },
    { nganh: "Công nghiệp", tyTrong: "11.16" },
    { nganh: "Hàng tiêu dùng", tyTrong: "15.23" },
    { nganh: "Y tế", tyTrong: "0.75" },
    { nganh: "Dịch vụ tiêu dùng", tyTrong: "2.77" },
    { nganh: "Viễn thông", tyTrong: "0.07" },
    { nganh: "Các dịch vụ hạ tầng", tyTrong: "1.64" },
    { nganh: "Tài chính", tyTrong: "46.60" },
    { nganh: "Công nghệ", tyTrong: "2.01" }
  ];

  constructor(private parseService: ParseService) {}
  chart: any;

  async ngOnInit() {
    // this.loadData();
    Highcharts.chart({
      chart: {
        renderTo: "container",
        backgroundColor: null,
        borderWidth: 0,
        type: "bar",
        margin: [2, 0, 2, 0],
        width: 200,
        height: 50,
        style: {
          overflow: "visible"
        }
      },
      title: {
        text: ""
      },
      credits: {
        enabled: false
      },
      xAxis: {
        labels: {
          enabled: false
        },
        startOnTick: false,
        endOnTick: false,
        tickPositions: []
      },
      yAxis: {
        endOnTick: false,
        startOnTick: false,
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        tickPositions: [0]
      },
      legend: {
        enabled: false
      },
      tooltip: {
        hideDelay: 0,
        outside: true,
        shared: true,
        pointFormat: "<b>{point.y}</b>% "
      },
      plotOptions: {
        series: {
          stacking: "normal",
          animation: false,
          lineWidth: 1,
          shadow: false
        }
      },
      series: [
        {
          type: "bar",
          data: [35],
          color: "rgb(230, 0, 0)"
        },
        {
          type: "bar",
          data: [25],
          color: "rgb(255, 204, 0)"
        },
        {
          type: "bar",
          data: [45],
          color: "rgb(57, 230, 0)"
        }
      ]
    });
  }

  parseData(news: Array<any>) {
    return news.map(value => {
      return {
        title: value.get("title") || "",
        media:
          value.get("media") || "https://www.ngoisaoso.vn/uploads/no-image.png",
        date: value.get("newsDate")
          ? moment(value.get("newsDate")).format("DD/MM")
          : "",
        link: value.get("link") || "",
        sapo: value.get("sapo") || ""
      };
    });
  }

  async loadData() {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.placeholders = new Array(this.pageSize);
    try {
      let news = await this.parseService.getNews(
        this.skip * this.pageSize,
        this.pageSize
      );
      this.skip++;
      this.news.push(...this.parseData(news));
      this.loading = false;
    } catch (ex) {
      console.log(ex);
    }
  }
}
