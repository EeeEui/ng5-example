import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-finance',
	templateUrl: './finance.component.html',
	styleUrls: ['./finance.component.scss']
})

export class FinanceComponent {
	isChoose: boolean = true;
	email: string = 'hana.jiang@paasoo.com '
}


