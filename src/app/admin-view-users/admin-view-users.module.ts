import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminViewUsersPageRoutingModule } from './admin-view-users-routing.module';

import { AdminViewUsersPage } from './admin-view-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminViewUsersPageRoutingModule
  ],
  declarations: [AdminViewUsersPage]
})
export class AdminViewUsersPageModule {}
