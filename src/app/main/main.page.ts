import { Component, OnInit } from "@angular/core";
import { PopoverPage } from "../popover/popover.page";
import { PopoverController } from "@ionic/angular";
import { NavController } from "@ionic/angular";
import { AuthenticateService } from "../services/authentication.service";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Observable, pipe, observable, Subscription } from "rxjs";
export interface Farm {
  temperature: string;
  soil: string;
  humidity: string;
  water_level: string;
}
export interface AppUser {
  map(arg0: (a: any) => void): any;
  // tslint:disable-next-line: member-ordering
  deviceId: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: "app-main",
  templateUrl: "./main.page.html",
  styleUrls: ["./main.page.scss"],
})
export class MainPage implements OnInit {
  user: any = { farmId: {} };
  device: any = {};
  // fields: any = [];
  userEmail: string;
  constructor(
    private popover: PopoverController,
    private navCtrl: NavController,
    private aft: AuthenticateService,
    public afs: AngularFirestore
  ) {}

  private appUserDoc: AngularFirestoreDocument<AppUser>;
  private farmDocument: AngularFirestoreDocument<Farm>;
  farm: Observable<Farm>;
  appUser: Observable<AppUser>;
  userCollection: AngularFirestoreCollection<any>;
  // tslint:disable-next-line: new-parens
  collection;
  message = "stopped";
  res;
  uid;
  usr;
  userId;
  public getUserSettings(userId) {
    this.appUserDoc = this.afs.doc<AppUser>("users/" + userId);
    return this.appUserDoc.valueChanges();
  }

  async fetchDeviceInfo(deviceId) {
    // console.log({ deviceId });
    // debugger;
    this.afs
      .collection("devices")
      .doc(deviceId)
      .valueChanges()
      .subscribe((device) => {
        this.device = device;
      });
  }
  async ngOnInit() {
    /***************************************************************** */

    const email = localStorage.getItem("email");
    // console.log(email);
    this.afs
      .collection("users", (ref) => ref.where("email", "==", email))
      .snapshotChanges()
      .subscribe((users) => {
        const [user] = users.map((user) => {
          const id = user.payload.doc.id;
          const data: any = user.payload.doc.data();
          return { id, ...data };
        });
        this.user = user;
        // console.log(this.user);
        const device = this.user.farmId.device;
        localStorage.setItem("deviceId", device.trim());
        // debugger;
        this.fetchDeviceInfo(device.trim());
      });
    /**************************************************************************** */

    /*****************************************getuserIDfunctionCall**********************/

    // this.aft.getUserIDAsync().then((user) => {
    //   this.appUser = this.getUserSettings(user.uid);
    //   this.appUser.subscribe(
    //     (x) => {
    //       this.farmDocument = this.afs.doc<Farm>("devices/" + x.deviceId);
    //       this.farm = this.farmDocument.valueChanges();
    //     },
    //     (err) => {
    //       console.error("something wrong occurred: " + err);
    //     },
    //     () => {
    //       console.log("done");
    //     }
    //   );
    // });

    // this.aft.userDetails().subscribe(
    //   (res) => {
    //     console.log("res", res);
    //     if (res !== null) {
    //       this.userEmail = res.email
    //         .substring(0, res.email.indexOf("@"))
    //         .toUpperCase();
    //     } else {
    //       this.navCtrl.navigateBack("");
    //     }
    //   },
    //   (err) => {
    //     console.log("err", err);
    //   }
    // );
  }

  async popclick(event) {
    const myPopover = await this.popover.create({
      component: PopoverPage,
      cssClass: "popover-main",
      event,
    });
    return await myPopover.present();
  }
}
