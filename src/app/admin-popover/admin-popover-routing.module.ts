import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPopoverPage } from './admin-popover.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPopoverPageRoutingModule {}
