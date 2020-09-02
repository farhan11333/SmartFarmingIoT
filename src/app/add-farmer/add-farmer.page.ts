import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-farmer',
  templateUrl: './add-farmer.page.html',
  styleUrls: ['./add-farmer.page.scss'],
})
export class AddFarmerPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: '';
  successMessage: string = '';

  validation_messages = {
   email: [
     { type: 'required', message: 'Email is required.' },
     { type: 'pattern', message: 'Enter a valid email.' }
   ],
   password: [
     { type: 'required', message: 'Password is required.' },
     { type: 'minlength', message: 'Password must be at least 6 characters long.' }
   ],
   username : [ { type: 'required', message: 'Username is required.' } 
   ]
   
 };

  constructor( private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
      username : new FormControl ('', Validators.compose([
       Validators.required
      ]))
      
    });
  }
  registerfarmer(value){
    this.authService.registerfarmer(value)
      // tslint:disable-next-line: align
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Farmer Added Successfully.';
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
   }              

}
