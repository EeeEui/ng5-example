import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	apiItems : Array <any> = [
        {value: 'ratbt95y', viewValue: 'ratbt95y(Master)'},
        {value: 'ratbt95y', viewValue: 'ratbt95y'},
        {value: 'ratbt95y', viewValue: 'ratbt95y'}
	];
	selected: String = 'ratbt95y';
	active: boolean = false;
}
