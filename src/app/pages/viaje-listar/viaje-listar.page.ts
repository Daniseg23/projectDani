import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Viaje } from 'src/app/services/servicios.service'; //ESTO FUE CLAVE PARA QUE FUNCIONARA, Por que importar vehiculo aparte si ya estoy importando todo con serviciosService?


@Component({
  selector: 'app-viaje-listar',
  templateUrl: './viaje-listar.page.html',
  styleUrls: ['./viaje-listar.page.scss'],
})
export class ViajeListarPage implements OnInit {
  misViajes: Viaje[] = []; //ESTO FUE CLAVE PARA QUE FUNCIONARA. Investigar por que "misVehiculos = [];" no funciona y si "misVehiculos: Vehiculo[] = []"


  constructor(private router: Router, private viajeService: ServiciosService) { }

  ngOnInit() {
    this.misViajes = this.viajeService.obtenerViajes();
  }
  
  clickPerfil(){
    this.router.navigate(['/perfil'])
  }

  clickViaje(){
    this.router.navigate(['/viaje'])
  }

  clickAyuda(){
    this.router.navigate(['/ayuda'])
  }

  clickInicio(){
    this.router.navigate(['/inicio'])
  }



}
