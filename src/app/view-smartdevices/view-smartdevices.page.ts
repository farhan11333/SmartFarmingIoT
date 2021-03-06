import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-view-smartdevices",
  templateUrl: "./view-smartdevices.page.html",
  styleUrls: ["./view-smartdevices.page.scss"],
})
export class ViewSmartdevicesPage implements OnInit {
  users: any = [];
  // fields: any = [];
  devices: any = [];
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    // console.log(this.device);
    // this.afs
    //   .collection("fields")
    //   .valueChanges()
    //   .subscribe((fields) => {
    //     this.fields = fields;
    //     console.log(this.fields);
    //     debugger;
    //   });

    /****************************************************************************************/
    this.afs
      .collection("users")
      .snapshotChanges()
      .subscribe((_users) => {
        // this.users = users;
        // console.log(this.users);
        this.users = _users.map((user) => {
          const id = user.payload.doc.id;
          const data: any = user.payload.doc.data();
          console.log(data);
          console.log(id);
          // debugger;
          return { id, ...data };
        });
        // console.log(this.users);
        //debugger;
      });
    console.log(this.users);
    //debugger;
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
        // console.log(this.devices);
        // debugger;
      });
    /******************************************************************************************/
  }
  deleteDevice(device) {
    this.afs.doc("devices/" + device.id).delete();
    console.log("device deleted");
    // console.log(this.device);
    // console.log(device);
    // console.log("devices/" + device.id);
    // debugger;
  }
}
