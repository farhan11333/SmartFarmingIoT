import { Farm } from './../main/main.page';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { timeStamp, time } from 'console';



export interface Motor {
  startedAt, motorIsrunning
}


export interface MotorStatus { status: string; time: string; }
// tslint:disable-next-line: no-unused-expression

@Component({
  selector: 'app-motorstatus',
  templateUrl: './motorstatus.page.html',
  styleUrls: ['./motorstatus.page.scss'],
})


export class MotorstatusPage implements OnInit {

  constructor(public afs: AngularFirestore, private db: AngularFireDatabase) { }
    currentDate;
  isChecker ;

statusCollection: AngularFirestoreCollection<MotorStatus>;
motorStatus: Observable<MotorStatus[]>;
motorButton: Observable<Motor>;
;
  ngOnInit() {
this.statusCollection = this.afs.collection<MotorStatus>('devices/farmEST17a/history', ref => ref.orderBy('time', 'desc'));
this.motorStatus = this.statusCollection.valueChanges();

this.motorButton = this.db.object<Motor>('farms/farmEST17a').valueChanges();
this.motorButton.subscribe(state => {
  this.isChecker = state.motorIsrunning;
  console.log('On value Observe:' + this.isChecker);
})
}
  async buttonMotor($event) {
    const name = this.db.database.ref('farms/farmEST17a');
  


    try {

      //this.isChecked = !this.isChecked;
console.log('in buttonMotor:' + this.isChecker);
      this.currentDate = new Date();
      // var currentTime = new Date().getTime();

      // await this.motorStatusdoc.update({motor: {
      // isRunning: isChecked}, startedAt: firebase.firestore.FieldValue.serverTimestamp() });
      // await this.motorStatusdoc.update({motorIsrunning: isChecked, startedAt: firebase.firestore.FieldValue.serverTimestamp() });
      await name.update({motorIsrunning: !this.isChecker, startedAt: firebase.database.ServerValue.TIMESTAMP  });








    } catch (error) {
        // catch error
    }

 }
}
