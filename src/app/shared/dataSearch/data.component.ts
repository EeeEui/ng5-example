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
    displayedColumns = ['position', 'name', 'weight', 'symbol'];
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
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  
  const ELEMENT_DATA: Element[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ];
    


