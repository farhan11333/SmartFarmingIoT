import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminViewDevicesPage } from "./admin-view-devices.page";

const routes: Routes = [
  {
    path: "",
    component: AdminViewDevicesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminViewDevicesPageRoutingModule {}
