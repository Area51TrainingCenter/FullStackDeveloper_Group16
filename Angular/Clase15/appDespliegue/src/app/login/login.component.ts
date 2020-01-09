import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { User } from '../modelos/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  grupo: FormGroup

  constructor(private readonly auth: AuthService) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  login() {
    const user: User = this.grupo.value
    this.auth.login(user)
  }

}
