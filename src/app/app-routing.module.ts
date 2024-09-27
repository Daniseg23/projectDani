/*En este apartado se colocan las rutas*/
/*de una vista a otra vista*/

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
const RedireccionarLogin = () => redirectUnauthorizedTo(['/login']);
const routes: Routes = [
  {
    path: 'home',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:RedireccionarLogin},
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
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:RedireccionarLogin},
    loadChildren: () => import('./pages/vehiculo/vehiculo.module').then( m => m.VehiculoPageModule)
  },
  {
    path: 'viaje',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:RedireccionarLogin},
    loadChildren: () => import('./pages/viaje/viaje.module').then( m => m.ViajePageModule)
  },
  {
    path: 'vehiculo',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:RedireccionarLogin},
    loadChildren: () => import('./pages/vehiculo/vehiculo.module').then( m => m.VehiculoPageModule)
  },
  {
    path: 'perfil',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:RedireccionarLogin},
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'registro-user',
    loadChildren: () => import('./pages/registro-user/registro-user.module').then( m => m.RegistroUserPageModule)
  },
  {
    path: 'agregar-auto',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:RedireccionarLogin},
    loadChildren: () => import('./pages/agregar-auto/agregar-auto.module').then( m => m.AgregarAutoPageModule)
  },
  {
    path: 'recuperar-password',
    loadChildren: () => import('./pages/recuperar-password/recuperar-password.module').then( m => m.RecuperarPasswordPageModule)
  },
  {
    path: 'ayuda',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:RedireccionarLogin},
    loadChildren: () => import('./pages/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'vehiculo-listar',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:RedireccionarLogin},
    loadChildren: () => import('./pages/vehiculo-listar/vehiculo-listar.module').then( m => m.VehiculoListarPageModule)
  },
  {
    path: 'viaje-agregar',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:RedireccionarLogin},
    loadChildren: () => import('./pages/viaje-agregar/viaje-agregar.module').then( m => m.ViajeAgregarPageModule)
  },
  {
    path: 'viaje-listar',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:RedireccionarLogin},
    loadChildren: () => import('./pages/viaje-listar/viaje-listar.module').then( m => m.ViajeListarPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error404/error404.module').then( m => m.Error404PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
