import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authentication.service';
import { NavController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
   // tslint:disable-next-line: variable-name
   validations_form: FormGroup;
   errorMessage: '';
   successMessage: string = '';
 
   // tslint:disable-next-line: variable-name
  validation_messages = {
    ownername: [
      { type: 'required', message: 'Name is required.' },
    ],
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ]
  };

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder, private loadingController: LoadingController
  ) { }

  ngOnInit(): void {
    this.validations_form = this.formBuilder.group({
      ownername: new FormControl('', Validators.compose([
        Validators.required
      ])),

      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(1),
        Validators.required
      ])),
    });
  }

 async tryRegister(value) {
    const loading = await this.loadingController.create({
      message: 'Signing up...',
      duration: 2200,
       translucent: true
    });
    await loading.present();
  
    this.authService.registerUser(value)
      // tslint:disable-next-line: align
      .then(res => {
        
        //console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Your account has been created. Please log in.';
        setTimeout(() => {
          this.successMessage = '';
                }, 4000);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
        setTimeout(() => {
          this.errorMessage = '';
                }, 4000);
        
      });
     // res.present();
    this.validations_form.reset();
  //  });
    return await loading.onDidDismiss();
  }

  goLoginPage() {
    this.navCtrl.navigateBack('');
  }

}
