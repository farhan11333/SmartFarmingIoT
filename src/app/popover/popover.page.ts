import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
PopoverPage: any;
  constructor(private navCtrl: NavController, private authService: AuthenticateService, private popover: PopoverController) { }

  ngOnInit() {
  }
  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      });

    this.popover.dismiss();
  }
  motorStatus() {
    this.navCtrl.navigateForward('/motorstatus');
    this.popover.dismiss();
  }

}
