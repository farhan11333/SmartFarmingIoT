import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from 'firebase';

@Component({
  selector: "app-view-farmers",
  templateUrl: "./view-farmers.page.html",
  styleUrls: ["./view-farmers.page.scss"],
})
export class ViewFarmersPage implements OnInit {
  users: any = [];
  fields: any = [];

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.afs
      .collection("fields")
      .valueChanges()
      .subscribe((fields) => {
        this.fields = fields;
        console.log(this.fields);
      });
    /********************************************************************************************** */
    const snapshotref = this.afs
      .collection("users", (ref) => ref.where("type", "==", "owner"))
      .snapshotChanges()
      .subscribe((users) => {
        this.users = users.map((user) => {
          const id = user.payload.doc.id;
          const data: any = user.payload.doc.data();
          return { id, ...data };
        });
        console.log(this.users);
        // debugger;
      });
    /********************************************************************************************* */
  }
  deleteFarmer(user) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(function (info) {
       var user = firebase.auth().currentUser;
       user.delete();
    });
    console.log(user.id);
    console.log("user deleted");
    this.afs.doc("users/" + user.id).delete();
    //  console.log("userdeleted");
    // debugger;
  }
}
