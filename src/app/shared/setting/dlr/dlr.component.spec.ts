import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { DlrComponent } from './dlr.component';

describe('DlrComponent', () => {
	let component: DlrComponent;
  	let fixture: ComponentFixture<DlrComponent>;

	beforeEach(async(() => {
    	TestBed.configureTestingModule({
			  declarations: [ DlrComponent ],
			  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    	})
    	.compileComponents();
  	}));

  	beforeEach(() => {
    	fixture = TestBed.createComponent(DlrComponent);
    	component = fixture.componentInstance;
    	fixture.detectChanges();
  	});

  	it('should create', () => {
    	expect(component).toBeTruthy();
  	});
});