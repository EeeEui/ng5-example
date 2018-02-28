import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { FinanceComponent } from './finance/finance.component';
import { PreviewComponent } from './preview/preview.component';
import { MaterialModule } from '../material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        IndexComponent,
        FinanceComponent,
        PreviewComponent,
        MaterialModule
    ],
    declarations: [
        IndexComponent,
        FinanceComponent,
        PreviewComponent
    ],
    providers: [
  
    ]
  })
  
  export class SharedModule {
    
  }