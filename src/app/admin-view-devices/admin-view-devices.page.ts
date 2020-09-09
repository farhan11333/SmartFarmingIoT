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
  fields: any = [];
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
        const ownerEmail = localStorage.getItem("email");
        this.afs
          .collection("fields", (ref) =>
            ref.where("ownerEmail", "==", ownerEmail)
          )
          .snapshotChanges()
          .subscribe((_fields) => {
            this.fields = _fields.map((field) => {
              const id = field.payload.doc.id;
              const data: any = field.payload.doc.data();
              return { id, ...data };
            });
           // console.log(this.fields);
          });
        res.present();
      });
  }
  async delete(field) {
  //  console.log(field);
    const myPopover =  await this.popover.create({
      component: DeletePopoverPage,
     
      cssClass: 'popover-top-right',
      
      componentProps: { field },
    });
    return  (await myPopover).present();
  }
}
