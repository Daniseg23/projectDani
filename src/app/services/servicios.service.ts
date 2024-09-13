import { Injectable } from '@angular/core';

export interface Vehiculo {
  //Vehiculo
  marca: string;
  modelo: string;
  anio: string;
  color: string;
  capacidadPasajero: string;
  patente: string;
}

export interface Viaje {
  //Viaje
  costo: number;
  fecha: string;
  ubOrigen: string;
  ubDestino: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  //Vehiculo
  private misVehiculos: Vehiculo[] = [];

  //Viaje
  private misViajes: Viaje[] = [];

  constructor() { }

  // Vehiculo Metodos
  agregarVehiculo(vehiculo: Vehiculo) {
    this.misVehiculos.push(vehiculo);
  }

  obtenerVehiculos(): Vehiculo[] {
    return this.misVehiculos;
  }

  //Viaje Metodos
  agregarViaje(viaje: Viaje) {
    this.misViajes.push(viaje);
  }

  obtenerViajes(): Viaje[] {
    return this.misViajes;
  }
  //------------------------------
  
}
