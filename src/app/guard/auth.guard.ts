
import { Injectable  } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from '../Users';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
    this.router = router;
  }
  currentUser: Users;
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    debugger;
    console.log('into AuthguardGuard canActivate');
    console.log(this.router.url);
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (this.currentUser) {

      return true;
    }

    //Unauthorized user. Redirect to login
    this.router.navigate(['/login']);
    return false;
  }
}
