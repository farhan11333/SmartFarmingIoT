import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSmartdevicesPage } from './view-smartdevices.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSmartdevicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSmartdevicesPageRoutingModule {}
