import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
    selector: 'app-daily',
    templateUrl: './daily.component.html',
    styleUrls: ['./daily.component.scss']
})
export class DailyComponent {

    country: FormControl = new FormControl();

    selections = [
    'One',
    'Two',
    'Three'
    ];
    displayedColumns = ['position', 'country', 'networkName', 'network', 'message', 'cost'];
    dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }

    options: any;
  
    ngOnInit() {
        let xAxisData = ['China','German','England','Japan'];
        let data1 = [1,2,3,4];
  
        this.options = {
            tooltip: {},
            xAxis: {
                name:'Cost(CNY)',
                data: xAxisData,
            silent: false,
            splitLine: {
                show: false
                }
            },
            yAxis: {
                name:'Country'
            },
            series: [{
                name: 'Cost(CNY)',
                type: 'bar',
                data: data1,
                animationDelay: function (idx) {
                    return idx * 10;
                }
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };
    }
}
  
  export interface Element {
    country: string;
    position: number;
    networkName: string;
    network: number;
    message: number;
    cost: number;
  }
  
  const ELEMENT_DATA: Element[] = [
    {position: 1, country: 'Hydrogen', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 2, country: 'Helium', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 3, country: 'Lithium', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 4, country: 'Beryllium', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 5, country: 'Boron', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 6, country: 'Carbon', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 7, country: 'Nitrogen', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 8, country: 'Oxygen', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 9, country: 'Fluorine', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 10, country: 'Neon', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 11, country: 'Sodium', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 12, country: 'Magnesium', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 13, country: 'Aluminum', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 14, country: 'Silicon', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 15, country: 'Phosphorus', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 16, country: 'Sulfur', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 17, country: 'Chlorine', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 18, country: 'Argon', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 19, country: 'Potassium', networkName: 'test', network: 46000, message: 1, cost: 0.04},
    {position: 20, country: 'Calcium', networkName: 'test', network: 46000, message: 1, cost: 0.04},
  ];
    