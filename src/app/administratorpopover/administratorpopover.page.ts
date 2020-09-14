import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController, LoadingController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administratorpopover',
  templateUrl: './administratorpopover.page.html',
  styleUrls: ['./administratorpopover.page.scss'],
})
export class AdministratorpopoverPage implements OnInit {

  constructor(private navCtrl: NavController, private popover: PopoverController, public aft: AuthenticateService,
              private loadingController: LoadingController, private router: Router) { }

  ngOnInit() {
  }
  viewfarmers() {
    this.navCtrl.navigateForward ('/view-farmers');
    this.popover.dismiss();
  }
  viewsmartdevices() {
    this.navCtrl.navigateForward ('/view-smartdevices');
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
    .then(res => {
      console.log(res);
      // this.navCtrl.navigateBack('/login').then(async () => {
      this.router.navigate(['login']).then(async () => {
             return await loading.onDidDismiss();
    })
    .catch(error => {
      console.log(error);
    });

      this.popover.dismiss();
  });
}
}

