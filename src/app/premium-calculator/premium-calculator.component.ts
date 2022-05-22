import { Component, OnInit, ViewChild } from '@angular/core';
import {CustomerDetails} from 'src/app/Shared/Model/CustomerDetails'
import {OccupationMaster } from 'src/app/Shared/Model/OccupationMaster'
import {
  FormsModule,
  FormGroup,
  FormControl,
  NgForm
} from '@angular/forms';
import { PremiumCalculatorServerService } from '../Shared/premium-calculator-server.service';

@Component({
  selector: 'app-premium-calculator',
  templateUrl: './premium-calculator.component.html',
  styleUrls: ['./premium-calculator.component.css']
})
export class PremiumCalculatorComponent implements OnInit {
  cus: CustomerDetails ;
  occupations: OccupationMaster[];
  isLoading = true;
  premiumAmount: any= '0.0';
  @ViewChild('f') pForm: NgForm;
  isFormValid = true;

  constructor(private premiumCalculatorServerService:PremiumCalculatorServerService) {
    
   }

  ngOnInit() {
     this.premiumCalculatorServerService.GetOccupationMaster().subscribe(
     (data: any)=>{
       this.cus ={
         name:"",
         DOB:"",
         age: 0,
         occupationValue: "-1"
         
       }
       this.occupations = data;
           this.isLoading = false;
     }

     );
    
  }
  CalculatePremium(){
    if(this.pForm.valid)
    {
      this.premiumCalculatorServerService.CalculatePremium(this.cus).subscribe(
        (data: any)=>{
          this.premiumAmount = data;
          });
    }
    else {
      this.isFormValid = false;
    }
   
  }
  calculateAge(){
    if(this.cus.DOB){
      const convertAge = new Date(this.cus.DOB);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.cus.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
  }

}
