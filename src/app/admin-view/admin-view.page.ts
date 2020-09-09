import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController, NavController, NavParams } from '@ionic/angular';
import { AdminPopoverPage } from '../admin-popover/admin-popover.page';
import { AuthenticateService } from '../services/authentication.service';

//import { Router } from '@angular/router';


//import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.page.html',
  styleUrls: ['./admin-view.page.scss'],
})
export class AdminViewPage implements OnInit {

//   userinfo;

  constructor(private popover: PopoverController, public navCtrl: NavController,public aft: AuthenticateService /*, private router: Router, public navParams: NavParams*/) {

  //  debugger;

  // this.userinfo = navParams.get('userinfo');

   }

   

  ngOnInit() {
    //console.log(this.navParams);    
   //debugger;
   //   this.router.NavParams.subscribe(NavParams => {
   //   this.userinfo = NavParams('userinfo');
   //  }
  }

  async popclick(event) {
    const mypopover = await this.popover.create({
      component: AdminPopoverPage,
      cssClass: 'popover',
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
