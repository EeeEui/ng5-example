import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	foods = [
        {value: 'ratbt95y', viewValue: 'ratbt95y(Master)'},
        {value: 'ratbt95y', viewValue: 'ratbt95y'},
        {value: 'ratbt95y', viewValue: 'ratbt95y'}
    ];
	active: boolean = false;
	links: Array <Object> = [
		{ url: '/index', link: 'Index' },
		{ url: '/finance', link: 'Finance' },
		{ url: '/preview', link: 'Preview' }
	]
}
