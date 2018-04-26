import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
	let component: NavComponent;
  	let fixture: ComponentFixture<NavComponent>;

	beforeEach(async(() => {
    	TestBed.configureTestingModule({
			  declarations: [ NavComponent ],
			  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    	})
    	.compileComponents();
  	}));

  	beforeEach(() => {
    	fixture = TestBed.createComponent(NavComponent);
    	component = fixture.componentInstance;
    	fixture.detectChanges();
  	});

  	it('should create', () => {
    	expect(component).toBeTruthy();
  	});
});
