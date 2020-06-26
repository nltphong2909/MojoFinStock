import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { OverviewComponent } from "./overview.component";
import { NbCardModule } from "@nebular/theme";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartModule } from "angular2-chartjs";

@NgModule({
  imports: [BrowserModule, NbCardModule, NgxChartsModule, ChartModule],
  declarations: [OverviewComponent],
  exports: [OverviewComponent],
  providers: []
})
export class OverViewModule {}
