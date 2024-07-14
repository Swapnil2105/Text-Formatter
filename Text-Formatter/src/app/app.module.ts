import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabaseEntryModule } from './modules/database-entry/database-entry.module';
import { HttpClientModule } from '@angular/common/http';
import { ApisComponentModule } from './modules/apis-component/apis-component.module';
import { HighchartsModule } from './modules/highcharts/highcharts.module';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatabaseEntryModule,
    HttpClientModule,
    ApisComponentModule,
    HighchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
