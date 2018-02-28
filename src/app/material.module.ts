import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
        MatListModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule, 
        MatIconModule,
        MatGridListModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        MatCardModule
    } from '@angular/material';


@NgModule({
    imports: [
        MatListModule,
        MatButtonModule, 
        MatToolbarModule, 
        MatSidenavModule, 
        MatIconModule, 
        MatGridListModule, 
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        MatCardModule
    ],
    exports: [
        MatListModule,
        MatButtonModule, 
        MatToolbarModule, 
        MatSidenavModule,
        MatIconModule, 
        MatGridListModule, 
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        MatCardModule
    ],
})
export class MaterialModule { }