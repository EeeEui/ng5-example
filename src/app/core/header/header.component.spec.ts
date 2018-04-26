import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header.component';


describe('HeaderComponent', () => {
	let component: HeaderComponent;
  	let fixture: ComponentFixture<HeaderComponent>;

	// 在每个 'it' 执行前调用
  	beforeEach(async(() => {
    	TestBed.configureTestingModule({
			declarations: [ HeaderComponent ],
			schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    	})
    	.compileComponents();
  	}));

  	beforeEach(() => {
    	fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
    	fixture.detectChanges();
  	});

  	it('should create', () => {
   		expect(component).toBeTruthy();
  	});
});
