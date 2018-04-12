import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './shared/index/index.component';
import { OverviewComponent } from './shared/cost/overview/overview.component';
import { DailyComponent } from './shared/cost/daily/daily.component';
import { MonthlyComponent } from './shared/cost/monthly/monthly.component';
import { DataSearchComponent } from './shared/dataSearch/data.component';
import { DailyAnalysisComponent } from './shared/analysis/daily/dailyAnalysis.component';
import { MonthlyAnalysisComponent } from './shared/analysis/monthly/monthlyAnalysis.component';
import { SendComponent } from './shared/send/send.component';
import { PriceComponent } from './shared/price/price.component';
import { FinanceComponent } from './shared/finance/chargeOnline/finance.component';
import { RecordComponent } from './shared/finance/record/record.component';
import { BalanceComponent } from './shared/setting/balance/balance.component';
import { DlrComponent } from './shared/setting/dlr/dlr.component';
import { PasswordComponent } from './shared/setting/password/password.component';
import { ProfileComponent } from './shared/setting/profile/profile.component';

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
  },{
    path: 'price',
    component: PriceComponent
  },{
    path: 'finance',
    component: FinanceComponent
  },{
    path: 'record',
    component: RecordComponent
  },{
    path: 'balance',
    component: BalanceComponent
  },{
    path: 'dlr',
    component: DlrComponent
  },{
    path: 'password',
    component: PasswordComponent
  },{
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
