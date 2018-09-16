import { Injectable } from '@angular/core'; 
import {ICustomerModel} from '../../model/customerModel'; 
import {Observable} from 'rxjs';      
import {  retry } from 'rxjs/operators';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private retryLimit = 1; 
  private EmployeeApi = "http://newapi.ajayelectronik.com/api/Customer";

  constructor(private _httpClient: HttpClient) {


   }

  public getAll(): Observable<ICustomerModel[]> {
    debugger
    return this._httpClient.get<ICustomerModel[]>(this.EmployeeApi).pipe(
      retry(this.retryLimit) 
    );
  }

 
}
