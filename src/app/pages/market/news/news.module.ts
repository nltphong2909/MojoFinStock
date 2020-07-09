import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { from } from "rxjs";
import { NewsComponent } from "./news.component";
import { NbTabsetModule } from "@nebular/theme";
import { NbCardModule, NbListModule } from "@nebular/theme";
import { ChartModule } from "angular2-chartjs";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { AgGridModule } from "ag-grid-angular";
@NgModule({
  declarations: [NewsComponent],

  imports: [
    CommonModule,
    NgxChartsModule,
    NbTabsetModule,
    NbCardModule,
    ChartModule,
    NbListModule,
    AgGridModule.withComponents([])
  ],

  exports: [NewsComponent]
})
export class NewsModule {}
