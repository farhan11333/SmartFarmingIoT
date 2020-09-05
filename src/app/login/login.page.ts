import { IonIcon } from "@ionic/angular";
import { Component, OnInit, Query, Type } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingController } from '@ionic/angular';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { NavController } from "@ionic/angular";
import { AuthenticateService } from "../services/authentication.service";
//import { firestore } from 'firebase';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
// import { type } from 'os';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  router: any;
  show = false;

  // tslint:disable-next-line: max-line-length
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private afs: AngularFirestore,
    private loadingController: LoadingController
  ) {}
  errorMessage = "";
  // tslint:disable-next-line: variable-name
  validations_form: FormGroup;
  // tslint:disable-next-line: variable-name
  validation_messages = {
    email: [
      { type: "required", message: "Email is required." },
      { type: "pattern", message: "Please enter a valid email." },
    ],
    password: [
      { type: "required", message: "Password is required." },
      {
        type: "minlength",
        message: "Password must be at least 5 characters long.",
      },
    ],
  };
  ngOnInit() {
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
        Validators.compose([
          // Validators.minLength(5),
          Validators.required,
        ])
      ),
    });
  }

  loginUser(value) {
    // this.show = true;
    // setTimeout(() => {
    //   this.show = false;
    // }, 2000);
    this.loadingController.create({
      message: 'Loggin in...',
      duration: 3000,
      spinner:'dots',
      cssClass:'custom-loader-class'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed! after 2 Seconds');
      });
    });
    this.validations_form.reset();
    this.authService.loginUser(value).then(
      (res) => {
        this.authService.getUserIDAsync().then((user) => {
          this.afs
            .collection("users", (ref) => ref.where("email", "==", user.email))
            .valueChanges()
            .subscribe((users) => {
              // tslint:disable-next-line: no-shadowed-variable
              const userinfo: any = users[0];
              if (userinfo.type === "owner") {
                this.navCtrl.navigateForward("/admin-view");
              } else {
                this.navCtrl.navigateForward("/main");
              }
            });
        });
        this.errorMessage = "";
        // this.navCtrl.navigateForward('/main');
      },
      (err) => {
        this.errorMessage = err.message;
        setTimeout(() => {
          this.errorMessage = "";
        }, 4000);
      }
    );
  }
  goToRegisterPage() {
    this.navCtrl.navigateForward("/registration");
  }
  gotoforgotpasswordPage() {
    this.navCtrl.navigateForward("/forgot-password");
  }
}
