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
import { debug } from "console";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.page.html",
  styleUrls: ["./add-user.page.scss"],
})
export class AddUserPage implements OnInit {
  fields: any = [];
  validations_form: FormGroup;
  errorMessage: "";
  successMessage: string = "";

  validation_messages = {
    email: [
      { type: "required", message: "Email is required." },
      { type: "pattern", message: "Enter a valid email." },
    ],
    password: [
      { type: "required", message: "Password is required." },
      {
        type: "minlength",
        message: "Password must be at least 6 characters long.",
      },
    ],
    username: [{ type: "required", message: "Username is required." }],
    farmId: [{ type: "required", message: "farmId is required." }],
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
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([Validators.minLength(6), Validators.required])
      ),
      username: new FormControl("", Validators.compose([Validators.required])),
      farmId: new FormControl("", Validators.compose([Validators.required])),
    });

    const ownerEmail = localStorage.getItem("email");
    this.afs
      .collection("fields", (ref) => ref.where("ownerEmail", "==", ownerEmail))
      .snapshotChanges()
      .subscribe((field) => {
        const fields = field.map((field) => {
          const id = field.payload.doc.id;
          const data: any = field.payload.doc.data();
          return { id, ...data };
        });
        this.fields = fields;
        // console.log(this.fields);
        debugger;
      });
  }

  /******************************************* */
  registerworker(value) {
    this.loadingController
      .create({
        message: "Adding User...",
        duration: 3000,
        spinner: "dots",
        cssClass: "custom-loader-class",
      })
      .then((res) => {
        console.log(value);

        this.afs
          .collection("fields", (ref) =>
            ref.where("device", "==", value.farmId)
          )
          .valueChanges()
          .subscribe((fields) => {
            console.log(fields);
            if (fields.length >= 1) {
              this.authService
                .registerworker(value)
                // tslint:disable-next-line: align
                .then(
                  (res) => {
                    console.log(res);
                    this.errorMessage = "";
                    this.successMessage = "User Added Successfully.";
                    setTimeout(() => {
                      this.successMessage = "";
                    }, 4000);
                  },
                  (err) => {
                    console.log(err);
                    this.errorMessage = err.message;
                    this.successMessage = "";
                    setTimeout(() => {
                      this.errorMessage = "";
                    }, 4000);
                  }
                );

              this.validations_form.reset();
            }
            res.present();
          });
      });
  }
}
