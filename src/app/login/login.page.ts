import { IonIcon } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  router: any;
  show = false;

  constructor(private navCtrl: NavController, private authService: AuthenticateService, private formBuilder: FormBuilder) {}
  errorMessage = '';
  // tslint:disable-next-line: variable-name
  validations_form: FormGroup;
  // tslint:disable-next-line: variable-name
  validation_messages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };
  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
       // Validators.minLength(5),
        Validators.required
      ])),
    });
}
    loginUser(value) {
    this.show = true;
    setTimeout(() => {
    this.show = false;
  }, 2000);
    this.validations_form.reset();
    this.authService.loginUser(value)
    .then(res => {
      this.authService.getUserIDAsync().then((user) =>{
        if (user.uid === '4rXJkp6KqlQok3PPuy7GXSKAqJN2')
        {
          this.navCtrl.navigateForward('/admin-view');
        }
        else {
          this.navCtrl.navigateForward('/main');
        }
      });
      
      this.errorMessage = '';
     // this.navCtrl.navigateForward('/main');
    }, err => {
      this.errorMessage = err.message;
      setTimeout(() => {
        this.errorMessage = '';
              }, 4000);
    });

}
goToRegisterPage() {
  this.navCtrl.navigateForward('/registration');
}
gotoforgotpasswordPage() {
  this.navCtrl.navigateForward('/forgot-password');
}
}
