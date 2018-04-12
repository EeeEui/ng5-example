import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material.module';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        AppRoutingModule
    ],
    exports: [
        MaterialModule,
        NavComponent,
        HeaderComponent
    ],
    declarations: [
        NavComponent,
        HeaderComponent
    ],
    providers: [
  
    ]
  })
  
  export class CoreModule {
    
  }