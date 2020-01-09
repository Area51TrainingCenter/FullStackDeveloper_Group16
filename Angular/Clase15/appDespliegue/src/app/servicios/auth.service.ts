import { User } from '../modelos/user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  onChangeStatusUser = new Subject()

  private users: Array<User> = [
    { email: "user01@email.com", password: "123", name: "User01" },
    { email: "user02@email.com", password: "123", name: "User02" },
    { email: "user03@email.com", password: "123", name: "User03" }
  ]

  userLogged: boolean = false

  constructor(private readonly router: Router, private readonly snackbar: MatSnackBar) { }

  login(user: User) {
    const index = this.users.findIndex(el => el.email == user.email.trim().toLowerCase() && el.password == user.password.trim())

    if (index > -1) {
      this.router.navigate(["/home"])
      this.userLogged = true
      sessionStorage.setItem("user", JSON.stringify({ name: this.users[index].name }))
      this.onChangeStatusUser.next(true)
    } else {
      this.snackbar.open("Las credenciales no son válidas", null, {
        duration: 2000
      })
    }
  }

  logout() {
    this.userLogged = false
    this.router.navigate(["/login"])
    this.onChangeStatusUser.next(false)
    sessionStorage.clear()
  }

  isUserLogged() {
    let sessionUser: boolean = false
    if (sessionStorage.getItem("user")) {
      sessionUser = true
    }
    return this.userLogged || sessionUser
  }

  getUserName() {
    return JSON.parse(sessionStorage.getItem("user")).name
  }

}
