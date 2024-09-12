import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiculoListarPage } from './vehiculo-listar.page';

const routes: Routes = [
  {
    path: '',
    component: VehiculoListarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculoListarPageRoutingModule {}
