import { Component } from '@angular/core';

@Component({
    selector: 'app-balance',
    templateUrl: './balance.component.html',
    styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {
    hide: boolean = true;
    email: string = 'hana.jiang@paasoo.com';
    selected = '86';
    color = 'accent';
    checked = false;
    disabled = false;
}