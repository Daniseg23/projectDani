import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajeListarPage } from './viaje-listar.page';

const routes: Routes = [
  {
    path: '',
    component: ViajeListarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajeListarPageRoutingModule {}
