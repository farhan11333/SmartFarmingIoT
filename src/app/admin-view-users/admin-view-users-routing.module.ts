import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminViewUsersPage } from './admin-view-users.page';

const routes: Routes = [
  {
    path: '',
    component: AdminViewUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminViewUsersPageRoutingModule {}
