import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MotorstatusPageRoutingModule } from "./motorstatus-routing.module";

import { MotorstatusPage } from "./motorstatus.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotorstatusPageRoutingModule,
  ],
  declarations: [MotorstatusPage],
})
export class MotorstatusPageModule {}
