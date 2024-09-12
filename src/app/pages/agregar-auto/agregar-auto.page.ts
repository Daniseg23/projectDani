
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

interface Vehiculo {
  marca: string;
  modelo: string;
  anio: string;
  color: string;
  capacidadPasajero: string;
  patente: string;
}

@Component({
  selector: 'app-agregar-auto',
  templateUrl: './agregar-auto.page.html',
  styleUrls: ['./agregar-auto.page.scss'],
})
export class AgregarAutoPage {
  marca: string = '';
  modelo: string = '';
  anio: string = '';
  color: string = '';
  capacidadPasajero: string = '';
  patente: string = '';

  constructor(private vehiculoService: ServiciosService, private router: Router) { }
  
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

  registrarVehiculo() {
    const nuevoVehiculo = {

      marca: this.marca,
      modelo: this.modelo,
      anio: this.anio,
      color: this.color,
      capacidadPasajero: this.capacidadPasajero,
      patente: this.patente,
    };
    this.vehiculoService.agregarVehiculo(nuevoVehiculo);
    // Limpiar los campos después de registrar el vehículo
    this.marca = '';
    this.modelo = '';
    this.anio = '';
    this.color ='';
    this.capacidadPasajero = '';
    this.patente = '';

  };
}