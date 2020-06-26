import { NgModule } from "@angular/core";
import { NbCardModule } from "@nebular/theme";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartModule } from "angular2-chartjs";
import { DashboardComponent } from "./dashboard.component";
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
@NgModule({
  imports: [
    NbCardModule,
    NgxChartsModule,
    ChartModule,
    // CommonModule,
    // FormsModule,
    RouterModule
    // ReactiveFormsModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}
