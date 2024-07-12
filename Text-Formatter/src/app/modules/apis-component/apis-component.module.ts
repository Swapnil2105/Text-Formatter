import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApisComponentRoutingModule } from './apis-component-routing.module';
import { APIsComponentComponent } from './apis-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    APIsComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ApisComponentRoutingModule
  ]
})
export class ApisComponentModule { }
