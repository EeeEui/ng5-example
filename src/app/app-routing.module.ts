import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './shared/index/index.component';
import { FinanceComponent } from './shared/finance/finance.component';
import { PreviewComponent } from './shared/preview/preview.component';
import { OverviewComponent } from './shared/cost/overview/overview.component';
import { DailyComponent } from './shared/cost/daily/daily.component';
import { MonthlyComponent } from './shared/cost/monthly/monthly.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },{
    path: '',
    component: IndexComponent
  },{
    path: 'index',
    component: IndexComponent
  },{
    path: 'overview',
    component: OverviewComponent
  },{
    path: 'daily',
    component: DailyComponent
  },{
    path: 'monthly',
    component: MonthlyComponent
  },{
    path: 'finance',
    component: FinanceComponent
  },{
    path: 'preview',
    component: PreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
