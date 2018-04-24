import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  
    displayedColumns:Array<String> = ['date', 'message', 'cost'];
    dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
    timeType: Array<any> = [
        { value:0, text:'last 7 days' },
        { value:1, text:'last 30 days' },
        { value:2, text:'last 12 months' }
    ]
    time: number = 0;
   
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     */
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

    options: any;
  
    ngOnInit() {
        let xAxisData = ['China','German','England','Japan'];
        let data1 = [1,2,3,4];
  
        this.options = {
            color:['#eb3e78'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            
                    type: 'shadow'        
                }
            },
            grid: {
                left: '5%',
                right: '10%',
                bottom: '6%',
                top:'14%',
                containLabel: true
            },
            xAxis: {
                name:'Country',
                data: ['China','Italy','England','Japan','America','Canada','Tailand','Cube','German','Ice']
            },
            yAxis: {
                name:'Cost(CNY)'
            },
            series: [{
                name: 'Cost(CNY)',
                type: 'bar',
                data:  [1,2,3,4,0,3,6,7,4,1],
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
    date: string;
    message: number;
    cost: number;
}
  
const ELEMENT_DATA: Element[] = [
    {date: '2018-04-06', message: 1, cost: 0.04},
    {date: '2018-04-06', message: 2, cost: 0.04},
    {date: '2018-04-06', message: 3, cost: 0.04},
    {date: '2018-04-06', message: 9, cost: 0.04},
    {date: '2018-04-06', message: 10, cost: 0.04},
    {date: '2018-04-06', message: 12, cost: 0.04},
    {date: '2018-04-06', message: 14, cost: 0.04},
    {date: '2018-04-06', message: 15, cost: 0.04},
    {date: '2018-04-06', message: 18, cost: 0.04},
    {date: '2018-04-06', message: 20, cost: 0.04},
    {date: '2018-04-06', message: 22, cost: 0.04},
    {date: '2018-04-06', message: 24, cost: 0.04},
    {date: '2018-04-06', message: 26, cost: 0.04},
    {date: '2018-04-06', message: 28, cost: 0.04},
    {date: '2018-04-06', message: 30, cost: 0.04},
    {date: '2018-04-06', message: 32, cost: 0.04},
    {date: '2018-04-06', message: 35, cost: 0.04},
    {date: '2018-04-06', message: 39, cost: 0.04},
    {date: '2018-04-06', message: 39, cost: 0.04},
    {date: '2018-04-06', message: 40, cost: 0.04},
];
    