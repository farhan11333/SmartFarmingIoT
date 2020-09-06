import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-view-smartdevices",
  templateUrl: "./view-smartdevices.page.html",
  styleUrls: ["./view-smartdevices.page.scss"],
})
export class ViewSmartdevicesPage implements OnInit {
  fields: any = [];

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.afs
      .collection("fields")
      .valueChanges()
      .subscribe((fields) => {
        this.fields = fields;
        console.log(this.fields);
      });
  }
}
