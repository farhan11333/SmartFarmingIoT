import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';



@Component({
  selector: 'app-add-field',
  templateUrl: './add-field.page.html',
  styleUrls: ['./add-field.page.scss'],
})
export class AddFieldPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: '';
  successMessage: string = '';

  validation_messages = {
   fieldname: [
     { type: 'required', message: 'Field Name is required.' },
    
   ],
   area: [
     { type: 'required', message: 'Area is required.' },
    
   ],
   location : [ { type: 'required', message: 'location  is required.' } 
  ],
   device: [ { type: 'required', message: 'Device ID is required.' } ]
   
 };
 constructor( private navCtrl: NavController,
              private authService: AuthenticateService,
              private formBuilder: FormBuilder, private afs: AngularFirestore,) { }

 ngOnInit(): void {
   this.validations_form = this.formBuilder.group({
     fieldname: new FormControl('', Validators.compose([
       Validators.required
      
     ])),
     area: new FormControl('', Validators.compose([
      
       Validators.required
     ])),
     location : new FormControl ('', Validators.compose([
      Validators.required
     ])),
     device : new FormControl ('', Validators.compose([
      Validators.required
     ]))

   });
}
addfield(value){




  
  
this.afs.collection('fields').add({


    fieldname: value.fieldname,
    area : value.area,
    location: value.location,
    device: value.device
    

  });

}

}
