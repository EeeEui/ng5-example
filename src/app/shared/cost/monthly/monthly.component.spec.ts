import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MonthlyComponent } from './monthly.component';

describe('MonthlyComponent', () => {
	let component: MonthlyComponent;
  	let fixture: ComponentFixture<MonthlyComponent>;

	beforeEach(async(() => {
    	TestBed.configureTestingModule({
			declarations: [ MonthlyComponent ],
			schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]  
    	})
    	.compileComponents();
  	}));

  	beforeEach(() => {
    	fixture = TestBed.createComponent(MonthlyComponent);
    	component = fixture.componentInstance;
    	fixture.detectChanges();
  	});

  	it('should create', () => {
    	expect(component).toBeTruthy();
  	});
});
