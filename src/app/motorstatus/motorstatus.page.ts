import { Farm } from './../main/main.page';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { timeStamp } from 'console';





export interface Motor {startedAt;
   motorIsrunning;


 }
// tslint:disable-next-line: no-unused-expression

@Component({
  selector: 'app-motorstatus',
  templateUrl: './motorstatus.page.html',
  styleUrls: ['./motorstatus.page.scss'],
})


export class MotorstatusPage implements OnInit {

  constructor(public afs: AngularFirestore, private db: AngularFireDatabase) { }
    currentDate;
  isChecked ;
   motorStatusdoc: AngularFirestoreDocument<Motor>;
  motorstatus: Observable<Motor>;
  ngOnInit() {




      // this.motorStatusdoc = this.afs.doc<Motor>('farms/farm1');
      // this.motorstatus = this.motorStatusdoc.valueChanges();
}
  async buttonMotor(isChecked) {
    const name = this.db.database.ref('farms/farm1');
    // .set({
    //   history : {
    //   status: isChecked,
    //   time: firebase.database.ServerValue.TIMESTAMP
    //   }
    // })


    try {

      this.isChecked = !this.isChecked;

      this.currentDate = new Date();
      // var currentTime = new Date().getTime();

      // await this.motorStatusdoc.update({motor: {
      // isRunning: isChecked}, startedAt: firebase.firestore.FieldValue.serverTimestamp() });
      // await this.motorStatusdoc.update({motorIsrunning: isChecked, startedAt: firebase.firestore.FieldValue.serverTimestamp() });
      await name.update({motorIsrunning: isChecked, startedAt: firebase.database.ServerValue.TIMESTAMP  });



     // this.currentDate =  firebase.database.ServerValue.TIMESTAMP * 1000;





    } catch (error) {
        // catch error
    }

 }
}
