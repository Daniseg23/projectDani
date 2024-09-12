import { Injectable } from '@angular/core';

export interface Vehiculo {
  marca: string;
  modelo: string;
  anio: string;
  color: string;
  capacidadPasajero: string;
  patente: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private misVehiculos: Vehiculo[] = [];

  constructor() { }

  agregarVehiculo(vehiculo: Vehiculo) {
    this.misVehiculos.push(vehiculo);
  }

  obtenerVehiculos(): Vehiculo[] {
    return this.misVehiculos;
  }
  //------------------------------
  
}
