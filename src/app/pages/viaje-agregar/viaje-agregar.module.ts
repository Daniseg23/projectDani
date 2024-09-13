import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajeAgregarPageRoutingModule } from './viaje-agregar-routing.module';

import { ViajeAgregarPage } from './viaje-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeAgregarPageRoutingModule
  ],
  declarations: [ViajeAgregarPage]
})
export class ViajeAgregarPageModule {}
