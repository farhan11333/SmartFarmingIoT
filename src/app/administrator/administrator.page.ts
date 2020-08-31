import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { AdministratorpopoverPage } from '../administratorpopover/administratorpopover.page';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.page.html',
  styleUrls: ['./administrator.page.scss'],
})
export class AdministratorPage implements OnInit {

  constructor(private popover: PopoverController, public navCtrl: NavController, public aft: AuthenticateService) { }

  ngOnInit() {
  }
  async popclick(event) {
    const mypopover = await this.popover.create({
      component: AdministratorpopoverPage,
    
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
