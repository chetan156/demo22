import { Component, OnInit } from '@angular/core';
import { ICustomerModel } from '../../model/customerModel'; 
import { CustomerService } from '../../service/customer/customer.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

_ICustomerModel: ICustomerModel;
_ICustomerModelColl: ICustomerModel[];
isLoaded : boolean;
  constructor(private _CustomerService:CustomerService) { 
    this.isLoaded = false;
  }

  ngOnInit() {
    debugger; 
    this._CustomerService.getAll().subscribe(
      result => {
        debugger;
        this._ICustomerModelColl = result["$values"];
        console.log(result);
      },
      error => { 
      },
      () => { 

      }
    );
  }

}
