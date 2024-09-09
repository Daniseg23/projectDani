import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarAutoPageRoutingModule } from './agregar-auto-routing.module';

import { AgregarAutoPage } from './agregar-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarAutoPageRoutingModule
  ],
  declarations: [AgregarAutoPage]
})
export class AgregarAutoPageModule {}
