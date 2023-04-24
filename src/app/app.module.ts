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
import{AngularFireModule} from '@angular/fire/compat';
import{AngularFireAuthModule} from '@angular/fire/compat/auth';

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
   RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBiNk9vOU23xixbrfM_6oERQ8Xwex66_pY",
      authDomain: "angularsampleproject-22ccb.firebaseapp.com",
      projectId: "angularsampleproject-22ccb",
      storageBucket: "angularsampleproject-22ccb.appspot.com",
      messagingSenderId: "735081205224",
      appId: "1:735081205224:web:8a57694318595f3bf2285d",
      measurementId: "G-K9NTPF4D5Z"
    }),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
