import { Component } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    phone: number = 8618900000000;
    email: string = 'hana.jiang@paasoo.com';
}