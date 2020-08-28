import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminViewDevicesPageRoutingModule } from './admin-view-devices-routing.module';

import { AdminViewDevicesPage } from './admin-view-devices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminViewDevicesPageRoutingModule
  ],
  declarations: [AdminViewDevicesPage]
})
export class AdminViewDevicesPageModule {}
