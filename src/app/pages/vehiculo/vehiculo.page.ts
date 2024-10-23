import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewDidEnter, ViewWillEnter, ViewDidLeave, ViewWillLeave } from '@ionic/angular';

import { ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserModel } from 'src/app/models/usuario';
import { HelperService } from 'src/app/services/helper.service';
//import { Vehiculo } from 'src/app/services/servicios.service'; //ESTO FUE CLAVE PARA QUE FUNCIONARA, Por que importar vehiculo aparte si ya estoy importando todo con serviciosService?


@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.page.html',
  styleUrls: ['./vehiculo.page.scss'],
})
export class VehiculoPage implements OnInit, ViewWillEnter, ViewDidEnter, ViewWillLeave, ViewDidLeave  {
  //misVehiculos: Vehiculo[] = []; //ESTO FUE CLAVE PARA QUE FUNCIONARA. Investigar por que "misVehiculos = [];" no funciona y si "misVehiculos: Vehiculo[] = []"
  p_patente: string = "";
  p_marca: string = "";
  p_modelo: string = "";
  p_anio: string = "";
  p_color: string = "";
  p_tipo_combustible: string = "";
  telefono: string = "";
  nombre_proyecto: string = "";
  loaded: boolean = false;
  vehiculo: UserModel[]=[];


  @ViewChild(IonCard, { read: ElementRef }) card: ElementRef<HTMLModElement> | undefined;
  private animation: Animation | undefined;

  constructor(private router:Router,
              private activateRoute:ActivatedRoute,
              private animationCtrl: AnimationController,
              private firebase:FirebaseService,
              private vehiculoService:VehiculoService,
              private storage:StorageService,
              private helper:HelperService
  ) { }

  async cargarVehiculo(){
    let dataStorage = await this.storage.obtenerStorage();
    const id_usuario = dataStorage[0].id_usuario;
    const req = await this.vehiculoService.obtenerVehiculo(
      {
        p_patente:dataStorage[0].vehiculo_patente,
        p_id_usuario:dataStorage[0].usuario_id,
        p_marca:dataStorage[0].vehiculo_marca,
        p_modelo:dataStorage[0].vehiculo_modelo,
        p_anio:dataStorage[0].vehiculo_anio,
        p_color:dataStorage[0].vehiculo_color,
        p_tipo_combustible:dataStorage[0].vehiculo_tipo_combustible,
        token:dataStorage[0].token
      }
    );
    this.vehiculo = req.data.filter((vehiculo: any) => vehiculo.id_usuario === id_usuario);  //Lo que hace es filtrar el array de vehiculos y me devuelve el vehiculo que tiene asignado un id_usuario que coincide con el id_usuario que tengo en el storage
    console.log("Datos de los vehículos:", this.vehiculo);
  } catch (error: any) {
    console.error("Error al cargar los datos del vehículo:", error);
  
  }
  ngOnInit() {
    //this.misVehiculos = this.vehiculoService.obtenerVehiculos();
    this.cargarVehiculo();
    setTimeout(() =>{
      this.loaded = true;
    },1000)
  }

  ionViewDidLeave(): void {
    console.log("view did leave");
    
  }
  ionViewWillLeave(): void {
    console.log("view will leave");
    
  }
  ionViewDidEnter(): void {
    console.log("view did enter");
    if (this.card) {
      this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
    }
  }

  ionViewWillEnter(): void {
    console.log("view will enter");
    
   }


  clickVehiculoListar() {
    this.router.navigate(['/vehiculo-listar']);
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
