import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-administratorpopover',
  templateUrl: './administratorpopover.page.html',
  styleUrls: ['./administratorpopover.page.scss'],
})
export class AdministratorpopoverPage implements OnInit {

  constructor(private navCtrl: NavController, private popover: PopoverController, public aft: AuthenticateService) { }

  ngOnInit() {
  }
  viewfarmers() {
    this.navCtrl.navigateForward ('/view-farmers');
    this.popover.dismiss();
  }
  viewsmartdevices(){
    this.navCtrl.navigateForward ('/view-smartdevices');
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
