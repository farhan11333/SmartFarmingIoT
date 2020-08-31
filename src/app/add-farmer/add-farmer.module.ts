import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFarmerPageRoutingModule } from './add-farmer-routing.module';

import { AddFarmerPage } from './add-farmer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFarmerPageRoutingModule
  ],
  declarations: [AddFarmerPage]
})
export class AddFarmerPageModule {}
