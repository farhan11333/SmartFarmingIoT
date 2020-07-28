import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotorstatusPage } from './motorstatus.page';

const routes: Routes = [
  {
    path: '',
    component: MotorstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotorstatusPageRoutingModule {}
