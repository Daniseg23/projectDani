import { Component, OnInit } from '@angular/core';
import { ViajeService } from 'src/app/services/viaje.service';
import { HelperService } from 'src/app/services/helper.service';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

interface Viaje {
  costo: number;
  fecha: string;
  ubicacionOrigen: string;
  ubicacionDestino: string;
}

@Component({
  selector: 'app-viaje-agregar',
  templateUrl: './viaje-agregar.page.html',
  styleUrls: ['./viaje-agregar.page.scss'],
})

export class ViajeAgregarPage {
  costo: number = 0;
  fecha: string = '';
  ubicacionOrigen: string = '';
  ubicacionDestino: string = '';

  constructor(private viajeService: ServiciosService,
              private helper:HelperService,
              private router: Router) { }
  
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

  async registrarViaje(){
    //Con esto valida que los campos se completen
    if(this.costo > 0 && this.fecha && this.ubicacionOrigen && this.ubicacionDestino){
      const nuevoViaje: Viaje = {
        costo: this.costo,
        fecha: this.fecha,
        ubicacionOrigen: this.ubicacionOrigen,
        ubicacionDestino: this.ubicacionDestino,
      };

      try{
        await this.viajeService.agregarViaje(nuevoViaje);

        await this.helper.showAlert('Su viaje se ha registrado exitosamente', 'Muy Bien')

        this.costo = 0;
        this.fecha = "";
        this.ubicacionOrigen = "";
        this.ubicacionDestino = "";

        this.router.navigate(['/viaje']);
      }catch (error){
        await this.helper.showAlert('Lo siento, no se ha registrado su viaje deseado', 'ERROR');
      }
    } else{
      await this.helper.showAlert('Completar todos los campos', 'Advertencia')
    }
  }
}