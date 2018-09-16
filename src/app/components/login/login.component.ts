
import { NgModule,OnInit, Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../../Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  currentUser: Users;
  loginForm: FormGroup;
  errroMsg: string = "";
  selemp: Users;
  constructor(private fb: FormBuilder, private router: Router) {
    localStorage.clear();
    this.createForm();
    this.currentUser = { UserName: "", Password: "" , Role:"",UserId:""};
   }

  ngOnInit() {
    debugger;
  }
  createForm() {
    debugger;
    this.loginForm = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  onSubmit() {
    const formModel = this.loginForm.value;
    var username = formModel.Username;
    var password = formModel.Password;

      debugger;
      if(username=="admin" && password=="admin")
      {

        localStorage.setItem('currentUser', JSON.stringify(username));
        this.router.navigate(['dashboard']);
      }
      else
      {
        this.errroMsg="Wrong user Details";
      }


    }
}
