/*En este apartado se colocan las rutas*/
/*de una vista a otra vista*/

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio/:correo',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'vehiculo',
    loadChildren: () => import('./pages/vehiculo/vehiculo.module').then( m => m.VehiculoPageModule)
  },
  {
    path: 'viaje',
    loadChildren: () => import('./pages/viaje/viaje.module').then( m => m.ViajePageModule)
  },
  {
    path: 'vehiculo',
    loadChildren: () => import('./pages/vehiculo/vehiculo.module').then( m => m.VehiculoPageModule)
  },  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'registro-user',
    loadChildren: () => import('./pages/registro-user/registro-user.module').then( m => m.RegistroUserPageModule)
  },
  {
    path: 'agregar-auto',
    loadChildren: () => import('./pages/agregar-auto/agregar-auto.module').then( m => m.AgregarAutoPageModule)
  },
  {
    path: 'recuperar-password',
    loadChildren: () => import('./pages/recuperar-password/recuperar-password.module').then( m => m.RecuperarPasswordPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./pages/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'vehiculo-listar',
    loadChildren: () => import('./pages/vehiculo-listar/vehiculo-listar.module').then( m => m.VehiculoListarPageModule)
  },
  {
    path: 'viaje-agregar',
    loadChildren: () => import('./pages/viaje-agregar/viaje-agregar.module').then( m => m.ViajeAgregarPageModule)
  },
  {
    path: 'viaje-listar',
    loadChildren: () => import('./pages/viaje-listar/viaje-listar.module').then( m => m.ViajeListarPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
