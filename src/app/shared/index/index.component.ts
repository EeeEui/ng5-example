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