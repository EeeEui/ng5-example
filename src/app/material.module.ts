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
    import { MatRadioModule } from '@angular/material/radio';
    import { MatSlideToggleModule } from '@angular/material/slide-toggle';
    import { MatTabsModule } from '@angular/material/tabs';
    import { MatExpansionModule } from '@angular/material/expansion';

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
        MatStepperModule,
        MatSlideToggleModule,
        MatRadioModule,
        MatTabsModule,
        MatExpansionModule
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
        MatStepperModule,
        MatSlideToggleModule,
        MatRadioModule,
        MatTabsModule,
        MatExpansionModule
    ],
})
export class MaterialModule { }