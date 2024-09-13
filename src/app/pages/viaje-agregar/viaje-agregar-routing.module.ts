import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajeAgregarPage } from './viaje-agregar.page';

const routes: Routes = [
  {
    path: '',
    component: ViajeAgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajeAgregarPageRoutingModule {}
