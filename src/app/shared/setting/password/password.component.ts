import { Component } from '@angular/core';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
    hide: boolean = true;
    confirm: boolean = true;
    email: string = 'hana.jiang@paasoo.com';
}