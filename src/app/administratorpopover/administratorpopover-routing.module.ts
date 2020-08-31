import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministratorpopoverPage } from './administratorpopover.page';

const routes: Routes = [
  {
    path: '',
    component: AdministratorpopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratorpopoverPageRoutingModule {}
