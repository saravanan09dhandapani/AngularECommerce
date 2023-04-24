import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
login = new FormGroup({
  name:new FormControl("",Validators.required),
  Email: new FormControl("",[Validators.required,Validators.email]),
  password: new FormControl("",[ Validators.required,Validators.minLength(8)])
});
GetData(){
  console.log(this.login.value)
}

get vname(){
  return this.login.get("name");
}
get vEmail(){
  return this.login.get("Email");
}
get vPassword(){
  return this.login.get("password");
}
}
