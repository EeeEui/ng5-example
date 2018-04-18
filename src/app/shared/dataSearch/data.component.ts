import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
	selector: 'app-data',
	templateUrl: './data.component.html',
	styleUrls: ['./data.component.scss']
})

export class DataSearchComponent {
	checked = false;
	Unsent = false;
	Submissionsuccessful = false;
	Accepted = false;
	SubmissionFailed = false;
	Failed = false;
	Rejected = false;
	Unknown = false;
	Unreachable = false;
	toppings = new FormControl();

	toppingList = [
		{name: {zh:'未发送',en:'Unsent',ja:'未发送'}['en'], value: -1},
		{name: {zh:'发送失败',en:'Failed',ja:'失敗'}['en'], value: 2},
		{name: {zh:'无报告',en:'Unknown',ja:'報告なし'}['en'], value: 3},
    	{name: {zh:'报告成功',en:'Submission Successful',ja:'报告成功'}['en'], value: 4},
    	{name: {zh:'报告接收',en:'Submission Accepted',ja:'报告接收'}['en'], value: 5},
    	{name: {zh:'报告失败',en:'Submission Failed',ja:'失敗'}['en'], value: 6},
        {name: {zh:'拒绝',en:'Rejected',ja:'拒否'}['en'], value: 8},
        {name: {zh:'无信号',en:'Unreachable',ja:'電波なし'}['en'], value: 7}
	];
    displayedColumns = ['mId', 
                        'destinations', 
                        'networkName',
                        'networkCode',
                        'message',
                        'sId',
                        'deNumber',
                        'cost',
                        'status', 
                        'time'];
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
    mId: string;
    destinations: string;
    networkName: string;
    networkCode: string;
    message: number;
    sId: string;
    deNumber: number;
    cost: number;
    status: string;
    time: string;
}
  
const ELEMENT_DATA: Element[] = [
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Hydrogen', cost: 1.0079},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Helium', cost: 4.0026},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Lithium', cost: 6.941},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Beryllium', cost: 9.0122},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Boron', cost: 10.811},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Carbon', cost: 12.0107},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Nitrogen', cost: 14.0067},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Oxygen', cost: 15.9994},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Fluorine', cost: 18.9984},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Neon', cost: 20.1797},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Sodium', cost: 22.9897},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Magnesium', cost: 24.305},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Aluminum', cost: 26.9815},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Silicon', cost: 28.0855},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Phosphorus', cost: 30.9738},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Sulfur', cost: 32.065},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Chlorine', cost: 35.453},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Argon', cost: 39.948},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Potassium', cost: 39.0983},
    {mId: '12345-abcde', destinations: 'China', networkName: 'CN-Other', networkCode: 'CN-Other', message: 10, sId: 'paasoo', deNumber: 123456789, time: '2018-04-18 23:59:59', status: 'Calcium', cost: 40.078},
];
    


