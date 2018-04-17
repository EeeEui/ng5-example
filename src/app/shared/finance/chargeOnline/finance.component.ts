import { Component } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
	selector: 'app-finance',
	templateUrl: './finance.component.html',
	styleUrls: ['./finance.component.scss']
})

export class FinanceComponent {

  animalControl = new FormControl('', [Validators.required]);

  animals = [
    {name: 'Alipay'},
    {name: 'PayPal'},
    {name: 'Credit Card'},
  ];

  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}


