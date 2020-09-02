import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFarmerPageRoutingModule } from './add-farmer-routing.module';

import { AddFarmerPage } from './add-farmer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFarmerPageRoutingModule,ReactiveFormsModule 
  ],
  declarations: [AddFarmerPage]
})
export class AddFarmerPageModule {}
