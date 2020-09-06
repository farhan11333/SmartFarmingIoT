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

@Component({
  selector: "app-add-smartdevices",
  templateUrl: "./add-smartdevices.page.html",
  styleUrls: ["./add-smartdevices.page.scss"],
})
export class AddSmartdevicesPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: "";
  successMessage: string = "";

  users: any = [];

  validation_messages = {
    smartdevice: [{ type: "required", message: "Device Name is required." }],
    ownerid: [
      {
        type: "required",
        message: "owner is required.",
      },
    ],
  };
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private afs: AngularFirestore,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      smartdevice: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      ownerid: new FormControl("", Validators.compose([Validators.required])),
    });

    this.afs
      .collection("users", (ref) => ref.where("type", "==", "owner"))
      .valueChanges()
      .subscribe((user) => {
        this.users = user;
        console.log(this.users);
      });
  }
  addSmartdevice(value) {
    this.loadingController
      .create({
        message: "Adding Device...",
        duration: 3000,
        spinner: "dots",
        cssClass: "custom-loader-class",
      })
      .then((res) => {
        res.present();

        res.onDidDismiss().then((dis) => {
          console.log("Loading dismissed! after 2 Seconds");
        });
      });
    const id = value.smartdevice;
    const ownerid = value.ownerid;
    const ref = this.afs.collection("devices").doc(id);
    ref
      .set({
        name: value.smartdevice,
        attachedTo: ownerid,
        soil: "0",
        humidity: "0",
        temperature: "0",
        motorIsrunning: false,
        startedAt: "0",
        //} ) ref.collection('history').doc(id).set({
        //   status:"",
      })
      .then(() => {
        this.successMessage = "Device added successfully";
        this.validations_form.reset();
      });
    debugger;
  }
}
