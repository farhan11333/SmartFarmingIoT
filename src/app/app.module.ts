import { DeletePopoverPageModule } from './delete-popover/delete-popover.module';
import { from } from 'rxjs';
import { PopoverPageModule } from './popover/popover.module';
import { environment } from './../environments/environment';
import { ForgotPasswordPageModule } from './forgotpassword/forgot-password.module';
import { LoginPageModule } from './login/login.module';
import { RegistrationPageModule } from './registration/registration.module';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AdminPopoverPageModule } from './admin-popover/admin-popover.module';
import { AdministratorpopoverPageModule } from './administratorpopover/administratorpopover.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';





@NgModule({
  declarations: [
    AppComponent,
     ],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), AngularFireAuthModule, AngularFirestoreModule, 
    PopoverPageModule,
    AdminPopoverPageModule, AdministratorpopoverPageModule, AngularFireDatabaseModule, DeletePopoverPageModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestoreModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
