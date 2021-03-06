import { NavController } from '@ionic/angular';
import { Component, OnInit } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";
import { firestore } from "firebase";
import * as firebase from 'firebase';


@Component({
  selector: "app-admin-view-users",
  templateUrl: "./admin-view-users.page.html",
  styleUrls: ["./admin-view-users.page.scss"],
})
export class AdminViewUsersPage implements OnInit {
  users: any = [];

  constructor(private afs: AngularFirestore, private NavCtrl: NavController) {}

  ngOnInit() {
    const ownerEmail = localStorage.getItem("email");

    const snapshotref = this.afs
      .collection("users", (ref) => ref.where("ownerEmail", "==", ownerEmail))
      .snapshotChanges()
      .subscribe((users) => {
        this.users = users.map((user) => {
          const id = user.payload.doc.id;
          const data: any = user.payload.doc.data();
          return { id, ...data };
        });
      });

    // .valueChanges();
    // .subscribe((_users) => {
    // debugger;
    // this.users = _users;
    // console.log(this.users);
    // });
  }

  deleteUser(user) {
    // debugger;
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(function (info) {
       var user = firebase.auth().currentUser;
       user.delete();
    });
    console.log("userDeleted");
    this.afs.doc("users/" + user.id).delete();
    // this.afs
    //   .collection("users")
    //   .doc("users" + user)
    //   .delete();
    // debugger;
    //   this.afs
    //     .collection("users", (ref) => ref.where("email", "==", user.email))
    //     .delete();
    //   // .valueChanges()
    //   // .subscribe((users) => {
    //   // debugger;
    //   // });
  }
  addUser(){
this.NavCtrl.navigateForward('/add-user');
  }
}
