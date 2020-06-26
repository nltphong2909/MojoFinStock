import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { from } from "rxjs";
import { HsxComponent } from "./hsx.component";
import { NbTabsetModule } from "@nebular/theme";
import { NbCardModule } from "@nebular/theme";
import { ChartModule } from "angular2-chartjs";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { Sparkline } from "@syncfusion/ej2-charts";
import { orderdata } from "./hsxsparkdatas";
import { BrowserModule } from "@angular/platform-browser";
import { GridModule } from "@syncfusion/ej2-angular-grids";
@NgModule({
  declarations: [HsxComponent],

  imports: [
    CommonModule,
    NgxChartsModule,
    NbTabsetModule,
    NbCardModule,
    ChartModule,
    GridModule
  ],

  bootstrap: [HsxComponent],

  providers: []
})
export class HsxModule {}
