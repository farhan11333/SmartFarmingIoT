import { Component, OnInit } from "@angular/core";

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";

@Component({
  selector: "app-admin-view-devices",
  templateUrl: "./admin-view-devices.page.html",
  styleUrls: ["./admin-view-devices.page.scss"],
})
export class AdminViewDevicesPage implements OnInit {
  fields: any = [];
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    const ownerEmail = localStorage.getItem("email");
    this.afs
      .collection("fields", (ref) => ref.where("ownerEmail", "==", ownerEmail))
      .valueChanges()
      .subscribe((_fields) => {
        this.fields = _fields;
        console.log(this.fields);
      });
  }
}
