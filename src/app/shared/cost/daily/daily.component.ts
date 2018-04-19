import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
export class State {
    constructor(public name: string, public flag: string) { }
  }

@Component({
    selector: 'app-daily',
    templateUrl: './daily.component.html',
    styleUrls: ['./daily.component.scss']
})
export class DailyComponent {
    stateCtrl: FormControl;
    filteredStates: Observable<any[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];
  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
  }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
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
    