import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

export class State {
  constructor(public name: string, public flag: string) { }
}
@Component({
    selector: 'app-price',
    templateUrl: './price.component.html',
    styleUrls: ['./price.component.scss']
})
export class PriceComponent {
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

  displayedColumns = ['country', 'countryCode', 'network', 'networkName', 'price'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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

}

  
export interface Element {
    country: string;
    countryCode: number;
    network: number;
    networkName: string;
    price: number;
  }
  
  const ELEMENT_DATA: Element[] = [
    {country: 'China', countryCode: 86, network: 1, networkName: 'Hydrogen', price: 1.0079},
    {country: 'China', countryCode: 86, network: 2, networkName: 'Helium', price: 4.0026},
    {country: 'China', countryCode: 86, network: 3, networkName: 'Lithium', price: 6.941},
    {country: 'China', countryCode: 86, network: 4, networkName: 'Beryllium', price: 9.0122},
    {country: 'China', countryCode: 86, network: 5, networkName: 'Boron', price: 10.811},
    {country: 'China', countryCode: 86, network: 6, networkName: 'Carbon', price: 12.0107},
    {country: 'China', countryCode: 86, network: 7, networkName: 'Nitrogen', price: 14.0067},
    {country: 'China', countryCode: 86, network: 8, networkName: 'Oxygen', price: 15.9994},
    {country: 'China', countryCode: 86, network: 9, networkName: 'Fluorine', price: 18.9984},
    {country: 'China', countryCode: 86, network: 10, networkName: 'Neon', price: 20.1797},
    {country: 'China', countryCode: 86, network: 11, networkName: 'Sodium', price: 22.9897},
    {country: 'China', countryCode: 86, network: 12, networkName: 'Magnesium', price: 24.305},
    {country: 'China', countryCode: 86, network: 13, networkName: 'Aluminum', price: 26.9815},
    {country: 'China', countryCode: 86, network: 14, networkName: 'Silicon', price: 28.0855},
    {country: 'China', countryCode: 86, network: 15, networkName: 'Phosphorus', price: 30.9738},
    {country: 'China', countryCode: 86, network: 16, networkName: 'Sulfur', price: 32.065},
    {country: 'China', countryCode: 86, network: 17, networkName: 'Chlorine', price: 35.453},
    {country: 'China', countryCode: 86, network: 18, networkName: 'Argon', price: 39.948},
    {country: 'China', countryCode: 86, network: 19, networkName: 'Potassium', price: 39.0983},
    {country: 'China', countryCode: 86, network: 20, networkName: 'Calcium', price: 40.078},
  ];
    