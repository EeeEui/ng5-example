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
    import { MatCheckboxModule } from '@angular/material/checkbox';
    import { MatSelectModule } from '@angular/material/select';
    import { MatMenuModule } from '@angular/material/menu';
    import { MatProgressBarModule } from '@angular/material/progress-bar';
    import { MatStepperModule } from '@angular/material/stepper';
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
        ReactiveFormsModule,
        MatCheckboxModule,
        MatSelectModule,
        MatMenuModule,
        MatProgressBarModule,
        MatStepperModule
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
        ReactiveFormsModule,
        MatCheckboxModule,
        MatSelectModule,
        MatMenuModule,
        MatProgressBarModule,
        MatStepperModule

    ],
})
export class MaterialModule { }