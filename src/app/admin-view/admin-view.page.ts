import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController, NavController } from '@ionic/angular';
import { AdminPopoverPage } from '../admin-popover/admin-popover.page';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.page.html',
  styleUrls: ['./admin-view.page.scss'],
})
export class AdminViewPage implements OnInit {

  constructor(private popover: PopoverController, public navCtrl: NavController,public aft: AuthenticateService) { }

  ngOnInit() {
  }
  async popclick(event) {
    const mypopover = await this.popover.create({
      component: AdminPopoverPage,
      event
    });
    return await mypopover.present();
   
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
