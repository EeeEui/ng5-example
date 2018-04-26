import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { DataSearchComponent } from './data.component';

describe('DataSearchComponent', () => {
	let component: DataSearchComponent;
  	let fixture: ComponentFixture<DataSearchComponent>;

	beforeEach(async(() => {
    	TestBed.configureTestingModule({
			declarations: [ DataSearchComponent ],
			schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    	})
    	.compileComponents();
  	}));

  	beforeEach(() => {
    	fixture = TestBed.createComponent(DataSearchComponent);
    	component = fixture.componentInstance;
    	fixture.detectChanges();
  	});

  	it('should create', () => {
    	expect(component).toBeTruthy();
  	});
});
