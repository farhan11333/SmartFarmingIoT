import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSmartdevicesPageRoutingModule } from './add-smartdevices-routing.module';

import { AddSmartdevicesPage } from './add-smartdevices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSmartdevicesPageRoutingModule, ReactiveFormsModule
  ],
  declarations: [AddSmartdevicesPage]
})
export class AddSmartdevicesPageModule {}
