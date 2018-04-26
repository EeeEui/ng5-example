import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PriceComponent } from './price.component';

describe('PriceComponent', () => {
	let component: PriceComponent;
  	let fixture: ComponentFixture<PriceComponent>;

	beforeEach(async(() => {
    	TestBed.configureTestingModule({
			  declarations: [ PriceComponent ],
			  schemas: [NO_ERRORS_SCHEMA]
    	})
    	.compileComponents();
  	}));

  	beforeEach(() => {
    	fixture = TestBed.createComponent(PriceComponent);
    	component = fixture.componentInstance;
    	fixture.detectChanges();
  	});

  	it('should create', () => {
    	expect(component).toBeTruthy();
  	});
});