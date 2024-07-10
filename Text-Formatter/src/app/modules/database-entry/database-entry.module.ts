import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseEntryRoutingModule } from './database-entry-routing.module';
import { DatabaseEntryComponent } from './database-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    DatabaseEntryComponent
  ],
  imports: [
    CommonModule,
    DatabaseEntryRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CookieService]
})
export class DatabaseEntryModule { }
