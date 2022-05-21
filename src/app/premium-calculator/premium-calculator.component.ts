import { Component, OnInit } from '@angular/core';
import {CustomerDetails} from 'src/app/Shared/Model/CustomerDetails'
import {
  FormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-premium-calculator',
  templateUrl: './premium-calculator.component.html',
  styleUrls: ['./premium-calculator.component.css']
})
export class PremiumCalculatorComponent implements OnInit {
  cus: CustomerDetails = new CustomerDetails();
  Occupations = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
  constructor() { }

  ngOnInit() {
  //  this.cus.occupationValue = -1;
  }
  OnSubmit(){
    console.log("form submitted");
  }
  calculateAge(){
    if(this.cus.DOB){
      const convertAge = new Date(this.cus.DOB);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.cus.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
  }

}
