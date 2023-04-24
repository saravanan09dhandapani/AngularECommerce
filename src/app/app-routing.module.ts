import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { AllproductsComponent } from './DashBoardComponents/allproducts/allproducts.component';
import { RegisterComponent } from './Auth/login/register/register.component';

const routes: Routes = [
  {path:'',component:AllproductsComponent},
 {path:"login",component:LoginComponent},
 {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
