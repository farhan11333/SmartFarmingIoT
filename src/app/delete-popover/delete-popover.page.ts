import { Component, OnInit } from "@angular/core";

// import { AngularFirestore } from "@angular/fire/firestore";
import { debug } from "console";

@Component({
  selector: "app-delete-popover",
  templateUrl: "./delete-popover.page.html",
  styleUrls: ["./delete-popover.page.scss"],
})
export class DeletePopoverPage implements OnInit {
  //  fields: any = [];

  constructor() {}

  ngOnInit() {
    /**************************************************************** */
    // const ownerEmail = localStorage.getItem("email");
    // const snapshotref = this.afs
    //   .collection("fields", (ref) => ref.where("ownerEmail", "==", ownerEmail))
    //   .snapshotChanges()
    //   .subscribe((fields) => {
    //     this.fields = fields.map((field) => {
    //       const id = field.payload.doc.id;
    //       const data: any = field.payload.doc.data();
    //       return { id, ...data };
    //     });
    //     console.log(this.fields);
    //     // debugger;
    //   });
    /************************************************************** */
  }
  Delete() {
    console.log("userDeleted");
    //  console.log("/fields" + field.id);
    debugger;
  }
}
