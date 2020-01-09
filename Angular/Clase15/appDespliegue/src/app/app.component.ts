import { Component } from '@angular/core';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userLogged: boolean = false
  username: string

  constructor(private readonly auth: AuthService) { }

  ngOnInit() {
    this.userLogged = this.auth.isUserLogged()
    this.auth.onChangeStatusUser.subscribe(
      (status: boolean) => {
        this.userLogged = status
        if (status) this.username = this.auth.getUserName()
      }
    )
  }

  logout() {
    this.auth.logout()
  }
}
