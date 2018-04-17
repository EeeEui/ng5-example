import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-dlr',
    templateUrl: './dlr.component.html',
    styleUrls: ['./dlr.component.scss']
})
export class DlrComponent {
    displayedColumns = ['title', 'value'];
    dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
}
export interface Element {
    title: string;
    value: string;
  }
  
const ELEMENT_DATA: Element[] = [
    {title: 'Request Method', value: 'HTTP GET'},
    {title: 'Callback URL', value: 'The customer can specify a callback URL'},
    {title: 'Example', value: 'http://USER_CALLBACK_URL？type=dlr&messageid=MESSAGE_ID&to=6588888888&status=0&statuscode=delivered&errcode=1&network=52099'}
];