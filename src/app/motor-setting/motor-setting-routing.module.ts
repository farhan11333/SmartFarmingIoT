import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotorSettingPage } from './motor-setting.page';

const routes: Routes = [
  {
    path: '',
    component: MotorSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotorSettingPageRoutingModule {}
