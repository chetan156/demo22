import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName:any;
  isLoggedIn:boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('currentUser')!=null)
    {
      this.userName = JSON.parse(localStorage.getItem('currentUser'));
      this.isLoggedIn=true;
    }


  }
  logOut(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
