import { Component, OnInit } from "@angular/core";

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import {
  PopoverController,
  NavController,
  LoadingController,
} from "@ionic/angular";
import { DeletePopoverPage } from "../delete-popover/delete-popover.page";

@Component({
  selector: "app-admin-view-devices",
  templateUrl: "./admin-view-devices.page.html",
  styleUrls: ["./admin-view-devices.page.scss"],
})
export class AdminViewDevicesPage implements OnInit {
  // fields: any = [];
  users: any = [];
  constructor(
    private afs: AngularFirestore,
    private popover: PopoverController,
    private navCtrl: NavController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.loadingController
      .create({
        message: "Loading..",
        duration: 3500,
        spinner: "circles",
        cssClass: "custom-loader-class",
      })
      .then((res) => {
        res.present();
      });

    const ownerEmail = localStorage.getItem("email");
    this.afs
      .collection("users", (ref) => ref.where("ownerEmail", "==", ownerEmail))
      .valueChanges()
      .subscribe((users) => {
        this.users = users;
        console.log(this.users);
      });
    // debugger;
  }
  async delete(event) {
    const myPopover = this.popover.create({
      component: DeletePopoverPage,
      event,
    });
    return (await myPopover).present();
  }
}
