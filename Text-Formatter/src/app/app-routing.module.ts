import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseEntryComponent } from './modules/database-entry/database-entry.component';
import { APIsComponentComponent } from './modules/apis-component/apis-component.component';
import { HighchartsComponent } from './modules/highcharts/highcharts.component';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'database-entry', component: DatabaseEntryComponent },
  { path: 'apis-component', component: APIsComponentComponent},
  { path: 'highcharts', component: HighchartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
