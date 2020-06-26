import { NgModule } from "@angular/core";
import { NbMenuModule, NbThemeModule } from "@nebular/theme";
import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
// import { OverViewModule } from "./market/overview/overview.module";
import { DashboardModule } from "./dashboard/dashboard.module";
// import { OverViewModule } from './market/overview/overview.module';
import { PagesRoutingModule } from "./pages-routing.module";
// import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { HsxModule } from "./market/hsx/hsx.module";
import { NewsModule } from "./market/news/news.module";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    // OverViewModule,
    // FormsModule,
    RouterModule,
    NbThemeModule,
    HsxModule,
    NewsModule
  ],
  declarations: [PagesComponent],
  bootstrap: [PagesComponent]
})
export class PagesModule {}
