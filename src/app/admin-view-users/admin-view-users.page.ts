import { Component, OnInit } from "@angular/core";

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";

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
}
