import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { IndexComponent } from './index/index.component';
import { FinanceComponent } from './finance/finance.component';
import { PreviewComponent } from './preview/preview.component';
import { OverviewComponent } from './cost/overview/overview.component';
import { DailyComponent } from './cost/daily/daily.component';
import { MonthlyComponent } from './cost/monthly/monthly.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        NgxEchartsModule

    ],
    exports: [
        MaterialModule,
        NgxEchartsModule,
        IndexComponent,
        FinanceComponent,
        PreviewComponent,
        OverviewComponent,
        DailyComponent,
        MonthlyComponent

    ],
    declarations: [
        IndexComponent,
        FinanceComponent,
        PreviewComponent,
        OverviewComponent,
        DailyComponent,
        MonthlyComponent
    ],
    providers: [
  
    ]
  })
  
  export class SharedModule {
    
  }