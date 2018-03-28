import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from '../material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        AppRoutingModule
    ],
    exports: [
        NavComponent,
        MaterialModule
    ],
    declarations: [
        NavComponent
    ],
    providers: [
  
    ]
  })
  
  export class CoreModule {
    
  }