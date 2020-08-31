import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFarmerPage } from './add-farmer.page';

const routes: Routes = [
  {
    path: '',
    component: AddFarmerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFarmerPageRoutingModule {}
