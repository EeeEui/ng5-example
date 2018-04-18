import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	ngOnInit() {
		const elemSlider = <HTMLElement>document.querySelector('.page-sidenav');
		const ps = new PerfectScrollbar(elemSlider);
		ps.update();
	}
}
