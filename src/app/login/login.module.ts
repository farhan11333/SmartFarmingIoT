import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {IonIcon} from '@ionic/angular';
import { IonicModule } from '@ionic/angular';


import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { from } from 'rxjs';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {
}
