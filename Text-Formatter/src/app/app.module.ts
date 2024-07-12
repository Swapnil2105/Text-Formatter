import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabaseEntryModule } from './modules/database-entry/database-entry.module';
import { ApisComponentModule } from './modules/apis-component/apis-component.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatabaseEntryModule,
    ApisComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
