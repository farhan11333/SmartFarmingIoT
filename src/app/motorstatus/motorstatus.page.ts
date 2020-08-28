import { Farm } from './../main/main.page';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { timeStamp } from 'console';


// tslint:disable-next-line: class-name
export interface Motor {startedAt: firebase.firestore.FieldValue;
  status; motor: {
  isRunning: boolean;

} ;
 }
// tslint:disable-next-line: no-unused-expression

@Component({
  selector: 'app-motorstatus',
  templateUrl: './motorstatus.page.html',
  styleUrls: ['./motorstatus.page.scss'],
})


export class MotorstatusPage implements OnInit {

  constructor(public afs: AngularFirestore) { }

  isChecked = false;
   motorStatusdoc: AngularFirestoreDocument<Motor>;
  motorstatus: Observable<Motor>;
  ngOnInit() {
    this.motorStatusdoc = this.afs.doc('/farms/farm1');
  }
  async buttonMotor(isChecked) {


    try {
      this.isChecked = !this.isChecked;
      await this.motorStatusdoc.update({motor: {
      isRunning: isChecked}, startedAt: firebase.firestore.FieldValue.serverTimestamp() });

    

    } catch (error) {
        // catch error
    }

 }
}
