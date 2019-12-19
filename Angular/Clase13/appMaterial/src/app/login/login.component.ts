import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  grupo: FormGroup

  constructor() { }

  ngOnInit() {
    this.grupo = new FormGroup({
      usuario: new FormControl(null, Validators.required),
      contrasena: new FormControl(null, Validators.required)
    })
  }

}
