import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddReserveComponent } from './add-reserve/add-reserve.component';
import { LoginComponent } from './login/login.component';
import { FoodManagementComponent } from './food-management/food-management.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AddReserveComponent,
    LoginComponent,
    FoodManagementComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot([
      {path:'reserve', component:AddReserveComponent},
      {path:'food', component:FoodManagementComponent},
      {path:'cart', component:ShoppingCartComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
