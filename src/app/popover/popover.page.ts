import { Component, OnInit } from "@angular/core";
import { NavController, PopoverController, LoadingController } from "@ionic/angular";
import { AuthenticateService } from "../services/authentication.service";

@Component({
  selector: "app-popover",
  templateUrl: "./popover.page.html",
  styleUrls: ["./popover.page.scss"],
})
export class PopoverPage implements OnInit {
  PopoverPage: any;
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private popover: PopoverController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}
  async logout() {

    const loading = await this.loadingController.create({
      message: 'Signing Out...',
      duration: 2000,
       translucent: true
    });
    await loading.present();

    this.authService
      .logoutUser()
      .then(async (res) => {
        console.log(res);
      
        this.navCtrl.navigateBack('').then(async () => {
          return await loading.onDidDismiss();
        });
        
      })
      .catch((error) => {
        console.log(error);
      });
     
    this.popover.dismiss();
  }
  motorStatus() {
    this.navCtrl.navigateForward("/motorstatus");
    this.popover.dismiss();
  }
  userProfile() {
    this.navCtrl.navigateForward("/user-profile");
    this.popover.dismiss();
  }
}
