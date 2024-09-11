//En este apartado se hacen los métodos

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  viajes(){
    console.log('viajes');
    //redirige al usuario a la vista "viaje"
    this.router.navigateByUrl('viajes')
  }

  clickPerfil(){
    this.router.navigate(['/perfil'])
  }

  clickVehiculo(){
    this.router.navigate(['/vehiculo'])
  }

  clickAyuda(){
    this.router.navigate(['/ayuda'])
  }

  clickInicio(){
    this.router.navigate(['/inicio'])
  }

}
