import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiculoListarPageRoutingModule } from './vehiculo-listar-routing.module';

import { VehiculoListarPage } from './vehiculo-listar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiculoListarPageRoutingModule
  ],
  declarations: [VehiculoListarPage]
})
export class VehiculoListarPageModule {}
