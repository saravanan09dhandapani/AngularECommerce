import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './DashBoardComponents/header/header.component';
import { GroceryComponent } from './DashBoardComponents/Grocery/grocery/grocery.component';
import { ElectronicsComponent } from './DashBoardComponents/Electronics/electronics/electronics.component';
import { VegetablesComponent } from './DashBoardComponents/Vegetables/vegetables/vegetables.component';
import { MobilesComponent } from './DashBoardComponents/Mobiles/mobiles/mobiles.component';
import { CarousalComponent } from './DashBoardComponents/Carousal/carousal/carousal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Auth/login/login.component';
import { AllproductsComponent } from './DashBoardComponents/allproducts/allproducts.component';
import { RegisterComponent } from './Auth/login/register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AuthService } from "./shared/services/auth.service";
import { ForgetPasswordComponent } from './Auth/login/forget-password/forget-password.component';



@NgModule({
  declarations: [
    AppComponent,
   HeaderComponent,
   GroceryComponent,
   ElectronicsComponent,
   VegetablesComponent,
   MobilesComponent,
   CarousalComponent,
   AllproductsComponent,
   LoginComponent,
   RegisterComponent,
   ForgetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
