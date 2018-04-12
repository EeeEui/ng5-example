import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './shared/index/index.component';
import { FinanceComponent } from './shared/finance/finance.component';
import { PreviewComponent } from './shared/preview/preview.component';
import { OverviewComponent } from './shared/cost/overview/overview.component';
import { DailyComponent } from './shared/cost/daily/daily.component';
import { MonthlyComponent } from './shared/cost/monthly/monthly.component';
import { DataSearchComponent } from './shared/dataSearch/data.component';
import { DailyAnalysisComponent } from './shared/analysis/daily/dailyAnalysis.component';
import { MonthlyAnalysisComponent } from './shared/analysis/monthly/monthlyAnalysis.component';
import { SendComponent } from './shared/send/send.component';


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
  },{
    path: 'dataSearh',
    component: DataSearchComponent
  },{
    path: 'dailyAnalysis',
    component: DailyAnalysisComponent
  },{
    path: 'monthlyAnalysis',
    component: MonthlyAnalysisComponent
  },{
    path: 'send',
    component: SendComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
