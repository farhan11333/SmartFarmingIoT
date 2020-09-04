import { Component, OnInit } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";
import { firestore } from "firebase";

@Component({
  selector: "app-admin-view-users",
  templateUrl: "./admin-view-users.page.html",
  styleUrls: ["./admin-view-users.page.scss"],
})
export class AdminViewUsersPage implements OnInit {
  users: any = [];

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    const ownerEmail = localStorage.getItem("email");
    this.afs
      .collection("users", (ref) => ref.where("ownerEmail", "==", ownerEmail))

      .valueChanges()
      .subscribe((_users) => {
        this.users = _users;
        console.log(this.users);
      });
  }

  deleteUser(user) {
    console.log("userDeleted");
    //   this.afs
    //     .collection("users", (ref) => ref.where("email", "==", user.email))
    //     .delete();
    //   // .valueChanges()
    //   // .subscribe((users) => {
    //   // debugger;
    //   // });
  }
}
