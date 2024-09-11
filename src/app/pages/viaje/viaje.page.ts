//En este apartado se hacen los métodos

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }

  viajes(){
    console.log('viajes');
    //redirige al usuario a la vista "viaje"
    this.router.navigateByUrl('viajes')
  }

  clickPerfil(){
    this.router.navigate(["/perfil"])
  }

  clickVehiculo(){
    this.router.navigate(["/vehiculo"])
  }

  clickAyuda(){
    this.router.navigate(["/ayuda"])
  }

  clickInicio(){
    this.router.navigate(["/inicio"])
  }

}
