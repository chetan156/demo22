
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LeaveComponent } from './components/leave/leave.component';
import { HomeComponent } from './components/home/home.component';
import { WhyComponent } from './components/why/why.component';

import { AuthGuard } from './guard/auth.guard';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard],
      children: [
          { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
          { path: 'employee', component: EmployeeComponent },
          { path: 'leave', component: LeaveComponent, canActivate: [AuthGuard] },
          { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
          { path: 'why', component: WhyComponent, canActivate: [AuthGuard] }
      ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }
];


@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(appRoutes)]
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModuleModule { }
