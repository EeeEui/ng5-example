import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { 
        MatAutocompleteModule,
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
        MatCardModule,
        MatTableModule,
        MatPaginatorModule
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
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule
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
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule
    ],
})
export class MaterialModule { }