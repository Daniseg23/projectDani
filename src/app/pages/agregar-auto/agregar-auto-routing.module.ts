import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarAutoPage } from './agregar-auto.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarAutoPageRoutingModule {}
