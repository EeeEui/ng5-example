import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgUploaderModule } from 'ngx-uploader';
import { IndexComponent } from './index/index.component';
import { OverviewComponent } from './cost/overview/overview.component';
import { DailyComponent } from './cost/daily/daily.component';
import { MonthlyComponent } from './cost/monthly/monthly.component';
import { DataSearchComponent } from './dataSearch/data.component';
import { DailyAnalysisComponent } from './analysis/daily/dailyAnalysis.component';
import { MonthlyAnalysisComponent } from './analysis/monthly/monthlyAnalysis.component';
import { SendComponent } from './send/send.component';
import { PriceComponent } from './price/price.component';
import { FinanceComponent } from './finance/chargeOnline/finance.component';
import { RecordComponent } from './finance/record/record.component';
import { BalanceComponent } from './setting/balance/balance.component';
import { DlrComponent } from './setting/dlr/dlr.component';
import { PasswordComponent } from './setting/password/password.component';
import { ProfileComponent } from './setting/profile/profile.component';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        NgxEchartsModule,
        NgUploaderModule

    ],
    exports: [
        MaterialModule,
        NgxEchartsModule,
        IndexComponent,
        OverviewComponent,
        DailyComponent,
        MonthlyComponent,
        DataSearchComponent,
        DailyAnalysisComponent,
        MonthlyAnalysisComponent,
        SendComponent,
        PriceComponent,
        FinanceComponent,
        RecordComponent,
        BalanceComponent,
        DlrComponent,
        PasswordComponent,
        ProfileComponent


    ],
    declarations: [
        IndexComponent,
        OverviewComponent,
        DailyComponent,
        MonthlyComponent,
        DataSearchComponent,
        DailyAnalysisComponent,
        MonthlyAnalysisComponent,
        SendComponent,
        PriceComponent,
        FinanceComponent,
        RecordComponent,
        BalanceComponent,
        DlrComponent,
        PasswordComponent,
        ProfileComponent
    ],
    providers: [
  
    ]
  })
  
  export class SharedModule {
    
  }