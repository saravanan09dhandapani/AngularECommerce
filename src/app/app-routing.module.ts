import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { AllproductsComponent } from './DashBoardComponents/allproducts/allproducts.component';
import { RegisterComponent } from './Auth/login/register/register.component';
import { ForgetPasswordComponent } from './Auth/login/forget-password/forget-password.component';

const routes: Routes = [
  {path:'allproducts',component:AllproductsComponent},
 {path:"",component:LoginComponent},
 {path:"login",component:LoginComponent},
 {path:"register",component:RegisterComponent},
 {path:"allproducts",component:AllproductsComponent},
 {path:"forgetpassword",component:ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
