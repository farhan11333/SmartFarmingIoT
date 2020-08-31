import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewFarmersPage } from './view-farmers.page';

const routes: Routes = [
  {
    path: '',
    component: ViewFarmersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewFarmersPageRoutingModule {}
