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


@NgModule({
  declarations: [
    AppComponent,
   HeaderComponent,
   GroceryComponent,
   ElectronicsComponent,
   VegetablesComponent,
   MobilesComponent,
   CarousalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
