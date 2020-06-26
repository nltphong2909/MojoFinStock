import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
  constructor() {}
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
  ngOnInit(): void {}
}
