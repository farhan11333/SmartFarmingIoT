import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-view-farmers",
  templateUrl: "./view-farmers.page.html",
  styleUrls: ["./view-farmers.page.scss"],
})
export class ViewFarmersPage implements OnInit {
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
  deleteFarmer(){
    
  }
}
