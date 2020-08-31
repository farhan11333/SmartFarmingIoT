import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSmartdevicesPageRoutingModule } from './view-smartdevices-routing.module';

import { ViewSmartdevicesPage } from './view-smartdevices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSmartdevicesPageRoutingModule
  ],
  declarations: [ViewSmartdevicesPage]
})
export class ViewSmartdevicesPageModule {}
