import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

interface Viaje {
  costo: number;
  fecha: string;
  ubOrigen: string;
  ubDestino: string;

}

@Component({
  selector: 'app-viaje-agregar',
  templateUrl: './viaje-agregar.page.html',
  styleUrls: ['./viaje-agregar.page.scss'],
})

export class ViajeAgregarPage {
  costo: number = 0;
  fecha: string = '';
  ubOrigen: string = '';
  ubDestino: string = '';

  constructor(private viajeService: ServiciosService, private router: Router) { }
  
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

  registrarViaje() {
    const nuevoViaje = {
      costo: this.costo,
      fecha: this.fecha,
      ubOrigen: this.ubOrigen,
      ubDestino: this.ubDestino,
      
    };
    this.viajeService.agregarViaje(nuevoViaje);
    // Limpiar los campos después de registrar el vehículo
    this.costo = 0;
    this.fecha = '';
    this.ubOrigen = '';
    this.ubDestino ='';
  }
};
