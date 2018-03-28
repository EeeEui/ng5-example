import { Component } from '@angular/core';

@Component({
	selector: 'app-finance',
	templateUrl: './finance.component.html',
	styleUrls: ['./finance.component.scss']
})

export class FinanceComponent {

	userObservable : Array<any> = [
    	{'title':'Finance page'}];
 
}


