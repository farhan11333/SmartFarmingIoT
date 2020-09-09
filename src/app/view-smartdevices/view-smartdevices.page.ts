import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-view-smartdevices",
  templateUrl: "./view-smartdevices.page.html",
  styleUrls: ["./view-smartdevices.page.scss"],
})
export class ViewSmartdevicesPage implements OnInit {
  //  users: any = [];
  fields: any = [];
  devices: any = [];
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.afs
      .collection("fields")
      .valueChanges()
      .subscribe((fields) => {
        this.fields = fields;
        console.log(this.fields);
      });

    /****************************************************************************************/
    // this.afs
    //   .collection("users")
    //   .valueChanges()
    //   .subscribe((users) => {
    //     this.users = users;
    //     console.log(this.users);
    //     debugger;
    //   });
    /****************************************************************************************/
    /******************************************************************************************/

    const snapshotref = this.afs
      .collection("devices")
      .snapshotChanges()
      .subscribe((devices) => {
        this.devices = devices.map((device) => {
          const id = device.payload.doc.id;
          const data: any = device.payload.doc.data();
          return { id, ...data };
        });
        console.log(this.devices);
        // debugger;
      });
    /******************************************************************************************/
  }
  deleteDevice(device) {
    console.log("device deleted");
    // console.log(device);
    // this.afs.doc("users/" + device.id).delete();
    //    console.log("devices/" + device.id);
    debugger;
  }
}
