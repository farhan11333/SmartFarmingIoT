import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewFarmersPageRoutingModule } from './view-farmers-routing.module';

import { ViewFarmersPage } from './view-farmers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewFarmersPageRoutingModule
  ],
  declarations: [ViewFarmersPage]
})
export class ViewFarmersPageModule {}
