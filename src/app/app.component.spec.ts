import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  	beforeEach(async(() => {
	    TestBed.configureTestingModule({
	      	imports: [
	        	RouterTestingModule
	      	],
	      	declarations: [
	        	AppComponent
		  	],
		  	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
	    }).compileComponents();
	}));

	// 测试用例
	it('reserve word', () => {
		// 组件类实例
		const fixture = TestBed.createComponent(AppComponent);
		const component = fixture.componentInstance;
		
		// 测试reverse方法
		expect('DCBA').toEqual(component.reverse('ABCD'));
		expect('TSET').toEqual(component.reverse('TEST'))
	});
});