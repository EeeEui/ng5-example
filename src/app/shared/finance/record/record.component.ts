import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
	selector: 'app-record',
	templateUrl: './record.component.html',
	styleUrls: ['./record.component.scss']
})

export class RecordComponent {
	toppings = new FormControl();
	displayedColumns = ['orderNumber', 
						'amountBeford', 
						'amount', 
						'balance',
						'time',
						'method',
						'status'];
    dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     */
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
}

export interface Element {
    orderNumber: number;
    amountBeford: string;
    amount: string;
	balance: string;
	time: string;
	method: string;
	status: string;
}
  
const ELEMENT_DATA: Element[] = [
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'},
	{orderNumber: 123456789, amountBeford: '500.000 CNY', amount: '425.000 CNY', balance: '4675.020 CNY', time: '2018-03-27 07:16:03', method:'Credit card', status: 'Payment Success'}
];