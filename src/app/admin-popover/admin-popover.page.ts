import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-admin-popover',
  templateUrl: './admin-popover.page.html',
  styleUrls: ['./admin-popover.page.scss'],
})
export class AdminPopoverPage implements OnInit {

  constructor(private navCtrl: NavController, private popover: PopoverController, public aft: AuthenticateService) { }

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
  logout() {
    this.aft.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('/login');
      })
      .catch(error => {
        console.log(error);
      });

    this.popover.dismiss();
  }

}
