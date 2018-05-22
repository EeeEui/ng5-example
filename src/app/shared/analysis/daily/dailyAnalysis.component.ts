import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ReactiveFormsModule, FormControl } from '@angular/forms';


@Component({
    selector: 'app-dailyAnalysis',
    templateUrl: './dailyAnalysis.component.html',
    styleUrls: ['./dailyAnalysis.component.scss']
})
export class DailyAnalysisComponent {

    country: FormControl = new FormControl();
	  displayedColumns = ['country', 
						'networkName', 
						'networkCode', 
						'send',
						'successful',
						'accepted',
						'failed',
						'rejected',
						'unknown',
						'unreachable',
						'successRate'];
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
    country: string;
    networkName: string;
	  networkCode: number, 
	  send: number;
    successful: number;
    accepted: number;
    failed: number;
    rejected: number;
	  unknown: number;
	  unreachable: number;
	  successRate: number;
  }
  
  const ELEMENT_DATA: Element[] = [
    {country: 'China', networkName: 'Hydrogen', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Helium', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Lithium', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Beryllium', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Boron', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Carbon', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Nitrogen', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Oxygen', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Fluorine', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Neon', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Sodium', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Magnesium', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Aluminum', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Silicon', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Phosphorus', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Sulfur', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Chlorine', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Argon', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Potassium', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
    {country: 'China', networkName: 'Calcium', networkCode: 46000, send: 20, successful: 10, accepted:9, failed: 1, rejected: 0, unknown: 0, unreachable: 0, successRate: 0.9},
  ];
    