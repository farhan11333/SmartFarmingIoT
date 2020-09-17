<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
=======
import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {
  FormGroup, FormBuilder, Validators, FormControl, } from '@angular/forms';
export interface Auto {
>>>>>>> fc5fca2d104568ef83ffbac55d51b5f7c0d92f41

  autoIsrunning: boolean;
}
@Component({
  selector: "app-motor-setting",
  templateUrl: "./motor-setting.page.html",
  styleUrls: ["./motor-setting.page.scss"],
})
export class MotorSettingPage implements OnInit {
<<<<<<< HEAD
  constructor() {}

  ngOnInit() {}
=======
  constructor(public afs: AngularFirestore, private formBuilder: FormBuilder, ) { }
  isChecker: boolean;
  user: any = { farmId: {} };
  validations_form: FormGroup;
  errorMessage: '';
  successMessage = '';
  validation_messages = {
    min: [{ type: 'required', message: 'Minimum value is required.' }],
    max: [{ type: 'required', message: 'Maximum value is required.' }],

  };
  autoButton: Observable<Auto>;

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      min: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])),
      max: new FormControl('', Validators.compose([Validators.required,
        Validators.pattern('[0-9]*')])),
      });


    this.autoButton = this.afs.collection('devices').doc<Auto>('farmEST17a').valueChanges();
    this.autoButton.subscribe((state) => {
      this.isChecker = state.autoIsrunning;
      console.log('On value Observe:' + this.isChecker);
      
  });

}
async buttonMotor($event) {

  const name = this.afs.collection('devices').doc('farmEST17a');

  try {

    console.log('in autoMotor:' + this.isChecker);


    await name.update({
      autoIsrunning: !this.isChecker,
    });
  } catch (error) {
    // catch error
  }
}
async autoTime(value){
 

      this.afs
              .collection('devices').doc('farmEST17a')
              .update({
              min: value.min,
              max:value.max
              })
              .then(() => {
                this.successMessage = 'Auto Set Successfully.';
              });

    }

>>>>>>> fc5fca2d104568ef83ffbac55d51b5f7c0d92f41
}
