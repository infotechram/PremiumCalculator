import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'; 
import {map} from 'rxjs/operators'
import {OccupationMaster} from 'src/app/Shared/Model/OccupationMaster';
import {CustomerDetails} from 'src/app/Shared/Model/CustomerDetails'
const httpOptions={
  headers: new HttpHeaders({'content-type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
}) 

export class PremiumCalculatorServerService {
  Url = 'https://localhost:7069/api/PremiumCalculator';
  constructor(private http:HttpClient) { }
  GetOccupationMaster(): Observable<any>  
  {  
    return this.http.get(this.Url + '/GetOccupation', httpOptions).pipe(map(this.extractData));  
  } 
  CalculatePremium(cus : CustomerDetails): Observable<any>  
  {  
    return this.http.post(this.Url + '/CalculatePremium',JSON.stringify(cus), httpOptions).pipe(map(this.extractData));  
  } 
  private extractData(res:Response){
    let body = res;
    return body ;
  } 
}
