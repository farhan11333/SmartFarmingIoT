import { Component, OnInit } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";
import { debug } from "console";

@Component({
  selector: "app-delete-popover",
  templateUrl: "./delete-popover.page.html",
  styleUrls: ["./delete-popover.page.scss"],
})
export class DeletePopoverPage implements OnInit {
  fields: any = [];
  // field: any;
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    /**************************************************************** */

    const ownerEmail = localStorage.getItem("email");
    const snapshotref = this.afs
      .collection("fields", (ref) => ref.where("ownerEmail", "==", ownerEmail))
      .snapshotChanges()
      .subscribe((fields) => {
        this.fields = fields.map((field) => {
          const id = field.payload.doc.id;
          const data: any = field.payload.doc.data();
          return { id, ...data };
        });
        console.log(this.fields);
        // debugger;
      });
    /************************************************************** */
  }
  Delete(field) {
    console.log('userDeleted', field.id);
    // console.log("fields/" + this.field);
    // debugger;
    this.afs.doc('fields/' + field.id).delete();
    // debugger;
  }
}
