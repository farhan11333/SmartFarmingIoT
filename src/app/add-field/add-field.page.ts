import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { AuthenticateService } from "../services/authentication.service";
import { NavController, LoadingController } from "@ionic/angular";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { userInfo } from "os";
import { AdminViewUsersPage } from "../admin-view-users/admin-view-users.page";

@Component({
  selector: "app-add-field",
  templateUrl: "./add-field.page.html",
  styleUrls: ["./add-field.page.scss"],
})
export class AddFieldPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: "";
  successMessage: string = "";
  devices: any = [];
  users: any = [];

  validation_messages = {
    fieldname: [{ type: "required", message: "Field Name is required." }],
    area: [{ type: "required", message: "Area is required." }],
    location: [{ type: "required", message: "location  is required." }],
    device: [{ type: "required", message: "Device ID is required." }],
  };
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private afs: AngularFirestore,
    private loadingController: LoadingController
  ) {}

  ngOnInit(): void {
    this.validations_form = this.formBuilder.group({
      fieldname: new FormControl("", Validators.compose([Validators.required])),
      area: new FormControl("", Validators.compose([Validators.required])),
      location: new FormControl("", Validators.compose([Validators.required])),
      device: new FormControl("", Validators.compose([Validators.required])),
    });

    /*********************
     * 
     * 
     Will be changed accordingly
     parameters issues
     *    
     * *******************/

    /******************************************************************************** */
    // const ownerEmail = localStorage.getItem("email");

    // const snapshotref = this.afs
    //   .collection("devices", (ref) => ref.where("ownerEmail", "==", ownerEmail))
    //   .snapshotChanges()
    //   .subscribe((users) => {
    //     this.users = users.map((user) => {
    //       const id = user.payload.doc.id;
    //       const data: any = user.payload.doc.data();
    //       console.log(id, data);
    //       return { id, ...data };
    //     });
    //     debugger;
    //   });

    /*********************************************************************************** */
    // this.afs
    //   .collection("users", (ref) => ref.where("type", "==", "worker"))
    //   .valueChanges()
    //   .subscribe((x) => {
    //     this.users = x;
    //     console.log(this.users);
    //   });
    /********************* */
    // // this.afs
    // //   .collection("devices", (ref) => ref.where("attachTo", "==", this.users))
    // //   .valueChanges()
    // //   .subscribe((x) => {
    // //     this.devices = x;
    // //     console.log(this.devices);
    // //   });
    // // debugger;

    /******************************************************************** */
    // const ownerEmail = localStorage.getItem("email");
    /********************************************************** */
    // this.afs
    //   .collection("users", (ref) => ref.where("type", "==", "owner"))
    //   .snapshotChanges()
    //   .subscribe((owners) => {
    //     const users = owners.map((owner) => {
    //       const id = owner.payload.doc.id;
    //       const data: any = owner.payload.doc.data();
    //       return { id, ...data };
    //     });
    //     this.users = users;
    //     // console.log(this.users);
    //     debugger;
    //   });

    /**************************************************************** */

    this.afs
      .collection("devices")
      .snapshotChanges()
      .subscribe((device) => {
        const devices = device.map((device) => {
          const id = device.payload.doc.id;
          const data: any = device.payload.doc.data();
          return { id, ...data };
        });
        this.devices = devices;
        // console.log(this.devices);
        // debugger;
      });
    /**************************************************** */
  }

  /******************************************************************** */

  /************************************************************** */
  addfield(value) {
    console.log(value);
    // debugger;
    // debugger;
    this.loadingController
      .create({
        message: "Adding Field...",
        duration: 3000,
        spinner: "dots",
        cssClass: "custom-loader-class",
      })
      .then((res) => {
        this.afs
          .collection("devices", (ref) => ref.where("name", "==", value.device))
          .valueChanges()
          .subscribe((devices) => {
            console.log(devices);
            // if (devices.length >= 1) {
            const ownerEmail = localStorage.getItem("email");
            this.afs
              .collection("fields")
              .add({
                fieldname: value.fieldname,
                area: value.area + "Acre",
                location: value.location,
                device: value.device,
                ownerEmail,
              })
              .then(() => {
                this.successMessage = "Field has been Added Successfully.";
              });

            this.validations_form.reset();
            // }
          });
        res.present();
      });
  }
}
