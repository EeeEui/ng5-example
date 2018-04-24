import { Component } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { single } from './index.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent {
    options: any;
    
    constructor() { }
  
    ngOnInit() {

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
                right: '14%',
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


