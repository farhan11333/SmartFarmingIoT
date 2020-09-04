import { Component, OnInit } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.page.html",
  styleUrls: ["./user-profile.page.scss"],
})
export class UserProfilePage implements OnInit {
  users: any = [];

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    const email = localStorage.getItem("email");
    this.afs
      .collection("users", (ref) => ref.where("email", "==", email))
      .valueChanges()
      .subscribe((_users) => {
        this.users = _users;
        console.log(this.users);
      });
  }
}
