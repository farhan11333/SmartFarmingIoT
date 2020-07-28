import { async } from '@angular/core/testing';
import { FormGroup, FormBuilder, FormControl, FormsModule, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { promise } from 'protractor';



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
myform: FormGroup;


  constructor(private authService: AuthenticateService, private router: Router, private alertCtrl: AlertController, 
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myform = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
       // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
    });
  }
  
  resetPassword(value) {
    this.authService.resetPassword(this.myform.value.email).then(
      async () => {
        const alert = await this.alertCtrl.create({
          subHeader: 'Email has been sent!',
          message: 'Please check your Email.',
          buttons: [{text: 'Ok', role: 'Cancel', handler: () => {
            this.router.navigateByUrl('login');
          }, }, ],

        });
        await alert.present();
      }
    );
  }

}
