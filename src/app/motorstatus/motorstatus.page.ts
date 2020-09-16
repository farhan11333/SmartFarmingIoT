import { Farm } from "./../main/main.page";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { AngularFireDatabase } from "@angular/fire/database";
import { Timestamp } from "rxjs/internal/operators/timestamp";
import * as firebase from "firebase";
import { map } from "rxjs/operators";
import { timeStamp, time } from "console";

export interface Motor {
  startedAt;
  motorIsrunning;
}

export interface MotorStatus {
  status: string;
  time: string;
}
// tslint:disable-next-line: no-unused-expression

@Component({
  selector: "app-motorstatus",
  templateUrl: "./motorstatus.page.html",
  styleUrls: ["./motorstatus.page.scss"],
})
export class MotorstatusPage implements OnInit {
  constructor(public afs: AngularFirestore, private db: AngularFireDatabase) {}
  currentDate;
  isChecker;
  history: any = [];
  statusCollection: AngularFirestoreCollection<MotorStatus>;
  motorStatus: Observable<MotorStatus[]>;
  motorButton: Observable<Motor>;
  ngOnInit() {
    const deviceId = localStorage.getItem("deviceId");
    this.statusCollection = this.afs.collection<MotorStatus>(
      `devices/${deviceId}/history`,
      (ref) => ref.orderBy("time", "desc")
    );
    // debugger;
    this.motorStatus = this.statusCollection.valueChanges();

    this.motorStatus.subscribe((history) => {
      // debugger;
      this.history = history;
    });
    this.motorButton = this.db
      .object<Motor>(`farms/${deviceId}`)
      .valueChanges();
    this.motorButton.subscribe((state) => {
      this.isChecker = state.motorIsrunning;
      console.log("On value Observe:" + this.isChecker);
      // debugger;
    });
  }
  async buttonMotor($event) {
    const deviceId = localStorage.getItem("deviceId");
    const name = this.db.database.ref(`farms/${deviceId}`);
    // debugger;
    try {
      //this.isChecked = !this.isChecked;
      console.log("in buttonMotor:" + this.isChecker);
      this.currentDate = new Date();
      // var currentTime = new Date().getTime();

      // await this.motorStatusdoc.update({motor: {
      // isRunning: isChecked}, startedAt: firebase.firestore.FieldValue.serverTimestamp() });
      // await this.motorStatusdoc.update({motorIsrunning: isChecked, startedAt: firebase.firestore.FieldValue.serverTimestamp() });

      // await this.afs.collection(`devices/${deviceId}/history`).add({
      //   motorIsrunning: !this.isChecker,
      //   startedAt: firebase.database.ServerValue.TIMESTAMP,
      // });
      await name.update({
        motorIsrunning: !this.isChecker,
        startedAt: firebase.database.ServerValue.TIMESTAMP,
      });
    } catch (error) {
      // catch error
    }
  }
}
