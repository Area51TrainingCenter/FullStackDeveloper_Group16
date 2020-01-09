import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private readonly auth: AuthService, private readonly router: Router) { }

  canActivate(): boolean {
    const status: boolean = this.auth.isUserLogged()
    if (status) return true

    this.router.navigate(["/login"])
    return false
  }

}
