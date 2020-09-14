import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController, LoadingController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-popover',
  templateUrl: './admin-popover.page.html',
  styleUrls: ['./admin-popover.page.scss'],
})
export class AdminPopoverPage implements OnInit {


  constructor(private navCtrl: NavController, private popover: PopoverController, public aft: AuthenticateService,
              private loadingController: LoadingController, private router: Router) { }

  ngOnInit() {
  }
  adminViewUsers() {
    this.navCtrl.navigateForward('/admin-view-users');
    this.popover.dismiss();
  }
  adminViewDevices() {
    this.navCtrl.navigateForward('/admin-view-devices');
    this.popover.dismiss();
  }
  ownerProfile() {
    this.navCtrl.navigateForward('/owner-profile');
    this.popover.dismiss();
  }
  async logout() {
    const loading = await this.loadingController.create({
      message: 'Signing Out...',
      duration: 2000,
       translucent: true
    });
    await loading.present();
    this.aft.logoutUser()
      .then(async (res) => {
        console.log(res);
        // this.navCtrl.navigateBack('/login').then(async () => {
        this.router.navigate(['login']).then(async () => {
          return await loading.onDidDismiss();
        });
      })
      .catch(error => {
        console.log(error);
      });

    this.popover.dismiss();
  }

}
