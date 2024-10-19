import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Viaje } from 'src/app/services/servicios.service'; //ESTO FUE CLAVE PARA QUE FUNCIONARA, Por que importar vehiculo aparte si ya estoy importando todo con serviciosService?


@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})

export class ViajePage implements OnInit, OnDestroy {
  misViajes: Viaje[] = []; //ESTO FUE CLAVE PARA QUE FUNCIONARA. Investigar por que "misVehiculos = [];" no funciona y si "misVehiculos: Vehiculo[] = []"

  constructor(private router: Router, private vehiculoService: ServiciosService) { }

  ngOnInit() {
    this.misViajes = this.vehiculoService.obtenerViajes();
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

  clickViaje(){
    this.router.navigate(['/viaje'])
  }

  clickVehiculoListar() {
    this.router.navigate(['/viaje-listar']);
  }

}
