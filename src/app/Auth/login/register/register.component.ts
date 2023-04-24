import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register = new FormGroup({
    name: new FormControl("", Validators.required),
    Email: new FormControl("",[Validators.required,Validators.email]),
    PhoneNumber: new FormControl("", Validators.required),
    Password: new FormControl("",[ Validators.required,Validators.minLength(8)]),
    ConformPassword: new FormControl("",[ Validators.required,Validators.minLength(8)])
  })

  get vname() {
    return this.register.get("name")
  }
  get vEmail() {
    return this.register.get("Email")
  }
  get vPhoneNumber() {
    return this.register.get("PhoneNumber")
  }
  get vPassword() {
    return this.register.get("Password")
  }
  get vConformPassword() {
    return this.register.get("ConformPassword")
  }
}
