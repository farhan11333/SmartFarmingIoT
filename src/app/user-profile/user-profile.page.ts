import { userInfo } from 'os';
import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticateService } from '../services/authentication.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import {FormBuilder,Validators,FormControl } from "@angular/forms";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  users: any = [];
name :string;
  userEmail: string;
  
  validations_form: FormGroup;
  UID: string;
  // email = localStorage.getItem('email');
  constructor(private afs: AngularFirestore,private authService: AuthenticateService,private alertCtrl: AlertController,private router: Router, private formBuilder: FormBuilder,) {}

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      username: new FormControl(
        '',
        
        Validators.compose([
          Validators.required,]))
        });
   /* *****************get logged in user email*************************** */
    this.authService.userDetails().subscribe(
      (res) => {
         
        console.log("res", res);
        if (res !== null) {
          this.userEmail = res.email;
          this.UID = res.uid;
        }});
          /* *****************get logged in user email*************************** */

    const email = localStorage.getItem('email');
    this.afs
      .collection('users', (ref) => ref.where('email', '==', email))
      .valueChanges()
      // tslint:disable-next-line: variable-name
      .subscribe((_users) => {
        this.users = _users;
        console.log(this.users);
      });
  }
  updateuserName(value) {
   
    this.afs.collection('users').doc(this.UID).update({
      username: value.username,
    }
    ).then ((res) => {
        console.log(res);
    });
  }

  resetPassword() {
        this.authService.resetPassword(this.userEmail).then(
      async () => {
        const alert = await this.alertCtrl.create({
          subHeader: 'Email has been sent!',
          message: 'Please check your Email.',
          buttons: [{text: 'Ok', role: 'Cancel', handler: () => {
            this.router.navigateByUrl('main');
          }, }, ],

        });
        await alert.present();
      }
    );
  }
}
