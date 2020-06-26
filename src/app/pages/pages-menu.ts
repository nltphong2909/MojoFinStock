import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Dashboard",
    icon: "home-outline",
    link: "/pages/dashboard",
    home: true
  },
  {
    title: "Auth",
    icon: "lock-outline",
    children: [
      {
        title: "Login",
        link: "/auth/login"
      },
      {
        title: "Register",
        link: "/auth/register"
      },
      {
        title: "Request Password",
        link: "/auth/request-password"
      },
      {
        title: "Reset Password",
        link: "/auth/reset-password"
      }
    ]
  },
  {
    title: "Thị trường",
    icon: "bar-chart",
    children: [
      {
        title: "Tổng quan",
        link: "/pages/overview"
      },
      {
        title: "Thống kê",
        link: "/pages/hsx"
      },
      {
        title: "Biến động ngành và tin tức",
        link: "/pages/news"
      }
    ]
  },
  {
    title: "Watchlist",
    icon: "search"
  },
  {
    title: "Cảnh báo/Khuyến cáo",
    icon: "bell-outline"
  },
  {
    title: "Bảng giá",
    icon: "file-outline"
  },
  {
    title: "Phân tích kỹ thuật",
    icon: "bar-chart"
  },
  {
    title: "Tin tức",
    icon: "list"
  },
  {
    title: "Cổ phiếu",
    icon: "folder-outline",
    children: []
  }
];
