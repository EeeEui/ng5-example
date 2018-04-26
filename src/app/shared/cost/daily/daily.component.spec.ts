import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { DailyComponent } from './daily.component';

describe('DailyComponent', () => {
	let component: DailyComponent;
  	let fixture: ComponentFixture<DailyComponent>;

	beforeEach(async(() => {
    	TestBed.configureTestingModule({
			declarations: [ DailyComponent ],
			schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    	})
    	.compileComponents();
  	}));

  	beforeEach(() => {
    	fixture = TestBed.createComponent(DailyComponent);
    	component = fixture.componentInstance;
    	fixture.detectChanges();
  	});

  	it('should create', () => {
    	expect(component).toBeTruthy();
  	});
});
