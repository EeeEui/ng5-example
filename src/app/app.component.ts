import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	links: Array <Object> = [
		{ url: '/index', link: 'Index' },
		{ url: '/finance', link: 'Finance' },
		{ url: '/preview', link: 'Preview' }
	]
}
