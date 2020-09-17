import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotorSettingPageRoutingModule } from './motor-setting-routing.module';

import { MotorSettingPage } from './motor-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotorSettingPageRoutingModule, ReactiveFormsModule
  ],
  declarations: [MotorSettingPage]
})
export class MotorSettingPageModule {}
