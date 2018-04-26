import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MonthlyAnalysisComponent } from './monthlyAnalysis.component';

describe('MonthlyAnalysisComponent', () => {
  	let component: MonthlyAnalysisComponent;
  	let fixture: ComponentFixture<MonthlyAnalysisComponent>;

  	beforeEach(async(() => {
    	TestBed.configureTestingModule({
			declarations: [ MonthlyAnalysisComponent ],
			schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]  
    	})
    	.compileComponents();
  	}));

  	beforeEach(() => {
    	fixture = TestBed.createComponent(MonthlyAnalysisComponent);
    	component = fixture.componentInstance;
    	fixture.detectChanges();
  	});

  	it('should create', () => {
    	expect(component).toBeTruthy();
 	});
});
