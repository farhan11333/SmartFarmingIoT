import { Component, OnInit } from '@angular/core';
import { PopoverPage } from '../popover/popover.page';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
 userEmail: string;
  constructor(private popover: PopoverController, private navCtrl: NavController, private authService: AuthenticateService ) { }

  ngOnInit() {
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.userEmail = res.email.substring(0, res.email.indexOf('@')).toUpperCase();
      } else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log('err', err);
    });

  }

  async popclick(event) {
    const mypopover = await this.popover.create({
      component: PopoverPage,
      event
    });
    return await mypopover.present();
}
}
