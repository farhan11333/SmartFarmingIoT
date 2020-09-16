import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticateService } from '../services/authentication.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-owner-profile',
  templateUrl: './owner-profile.page.html',
  styleUrls: ['./owner-profile.page.scss'],
})
export class OwnerProfilePage implements OnInit {
  users: any = [];
  name: string;
  userEmail: string;
  // tslint:disable-next-line: variable-name
  validations_form: FormGroup;
  UID: string;
  errorMessage: '';
  successMessage = '';

  constructor( private afs: AngularFirestore,
               private authService: AuthenticateService,
               private alertCtrl: AlertController,
               private router: Router,
               private formBuilder: FormBuilder,
               public toastController: ToastController) { }

  ngOnInit() {
  this.validations_form = this.formBuilder.group({
      username: new FormControl(
        '',

        Validators.compose([Validators.required])
      ),
    });
     /* *****************get logged in user email*************************** */
  this.authService.userDetails().subscribe((res) => {
      console.log('res', res);
      if (res !== null) {
        this.userEmail = res.email;
        this.UID = res.uid;
      }
    });
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
    this.afs
      .collection('users')
      .doc(this.UID)
      .update({
        username: value.username,
      })
      .then(async () => {
       // this.successMessage = 'Username Updated successfully';
        // this.validations_form.reset();

          const toast = await this.toastController.create({
            message: 'Username Updated successfully.',
            duration: 2000,
            position: 'top',
          });
          await toast.present();
        });


  }
  resetPassword() {
    this.authService.resetPassword(this.userEmail).then(async () => {
      const alert = await this.alertCtrl.create({
        subHeader: 'Email has been sent!',
        message: 'Please check your Email.',
        buttons: [
          {
            text: 'Ok',
            role: 'Cancel',
            handler: () => {
              this.router.navigateByUrl('admin-view');
            },
          },
        ],
      });
      await alert.present();
    });
  }
}


