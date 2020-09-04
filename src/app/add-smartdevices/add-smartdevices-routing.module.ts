import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSmartdevicesPage } from './add-smartdevices.page';

const routes: Routes = [
  {
    path: '',
    component: AddSmartdevicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSmartdevicesPageRoutingModule {}
