import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajeListarPageRoutingModule } from './viaje-listar-routing.module';

import { ViajeListarPage } from './viaje-listar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeListarPageRoutingModule
  ],
  declarations: [ViajeListarPage]
})
export class ViajeListarPageModule {}
