import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
  })
export class MemberAuthGuardService implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (this.authService.getSystemUser() != null) {
            if (this.authService.getSystemUser().roleName === 'Member' ||this.authService.getSystemUser().roleName === 'Super Admin') {
                return true;
            }
        }
        this.router.navigate(["/"]);
        return false;
    }
} 