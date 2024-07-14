import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighchartsRoutingModule } from './highcharts-routing.module';
import { HighchartsComponent } from './highcharts.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    HighchartsComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    HighchartsRoutingModule
  ]
})
export class HighchartsModule { }
