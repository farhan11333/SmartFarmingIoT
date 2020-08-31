import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministratorpopoverPageRoutingModule } from './administratorpopover-routing.module';

import { AdministratorpopoverPage } from './administratorpopover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministratorpopoverPageRoutingModule
  ],
  declarations: [AdministratorpopoverPage]
})
export class AdministratorpopoverPageModule {}
