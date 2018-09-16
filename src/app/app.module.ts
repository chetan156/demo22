import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LeaveComponent } from './components/leave/leave.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModuleModule } from './app-routing-module.module';
import { AuthGuard } from './guard/auth.guard';
import { WhyComponent } from './components/why/why.component';
import { CustomerService } from "./service/customer/customer.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeComponent,
    LeaveComponent,
    HomeComponent,
    WhyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModuleModule
  ],
  providers: [AuthGuard, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
