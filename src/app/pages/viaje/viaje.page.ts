import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewDidEnter, ViewWillEnter, ViewDidLeave, ViewWillLeave } from '@ionic/angular';

import { ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ViajeService } from 'src/app/services/viaje.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserModel } from 'src/app/models/usuario';
import { HelperService } from 'src/app/services/helper.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';
//import { VehiculoDetallesComponent } from '../modal/vehiculo-detalles/vehiculo-detalles.component';
//import { Vehiculo } from 'src/app/services/servicios.service'; //ESTO FUE CLAVE PARA QUE FUNCIONARA, Por que importar vehiculo aparte si ya estoy importando todo con serviciosService?


@Component({
  selector: 'viaje-vehiculo',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit, ViewWillEnter, ViewDidEnter, ViewWillLeave, ViewDidLeave  {
  //misVehiculos: Vehiculo[] = []; //ESTO FUE CLAVE PARA QUE FUNCIONARA. Investigar por que "misVehiculos = [];" no funciona y si "misVehiculos: Vehiculo[] = []"
  p_ubicacion_origen: string = "";
  p_ubicacion_destino: string = "";
  p_costo: number = 0;
  p_id_vehiculo: number = 0;
  nombre_proyecto: string = "";
  loaded: boolean = false;
  viaje: UserModel[] = [];
  vehiculo: any[] = [];
  message: string | undefined;

  @ViewChild(IonCard, { read: ElementRef }) card: ElementRef<HTMLModElement> | undefined;
  private animation: Animation | undefined;


  constructor(private router:Router,
              private activateRoute:ActivatedRoute,
              private animationCtrl: AnimationController,
              private firebase:FirebaseService,
              private viajeService:ViajeService,
              private storage:StorageService,
              private helper:HelperService,
              private modalCtrl: ModalController,
              private vehiculoService:VehiculoService
  ) { }


  ngOnInit() {
    //this.misVehiculos = this.vehiculoService.obtenerVehiculos();
    this.cargarViaje();
    this.cargarVehiculo();
    setTimeout(() =>{
      this.loaded = true;
    },1000);
  }

  async cargarVehiculo(){
    let dataStorage = await this.storage.obtenerStorage();
    const id_usuario = dataStorage[0].id_usuario;
    const req = await this.vehiculoService.obtenerVehiculoViaje(dataStorage[0].token);
    this.vehiculo = req.data.filter((vehiculo: any) => vehiculo.id_usuario === id_usuario);  //Lo que hace es filtrar el array de vehiculos y me devuelve el vehiculo que tiene asignado un id_usuario que coincide con el id_usuario que tengo en el storage
    console.log("Datos de todos los viajes:", this.vehiculo);
  }

  async cargarViaje(){
    let dataStorage = await this.storage.obtenerStorage();
    const id_usuario = dataStorage[0].id_usuario;
    const req = await this.viajeService.obtenerViaje(dataStorage[0].token);
    this.viaje = req.data.filter((viaje: any) => viaje.id_usuario === id_usuario);  //Lo que hace es filtrar el array de vehiculos y me devuelve el vehiculo que tiene asignado un id_usuario que coincide con el id_usuario que tengo en el storage
    console.log("Datos de todos los viajes:", this.viaje);
  } catch (error: any) {
    console.error("Error al cargar los datos de viaje:", error);
  
  }


  async clickAgregarViaje() {
    if (this.vehiculo.length === 0) {
      await this.helper.showAlert('No tienes vehículos registrados en su cuenta. Por favor, registra un vehículo antes de agregar un viaje.', 'Error');
    } else {
      this.router.navigate(['/viaje-agregar']);
    }
  }

  estadoViaje(id_estado: number): string {
    switch (id_estado) {
      case 1:
        return 'Disponible';
      case 2:
        return 'En ruta';
      case 3:
        return 'Finalizado';
      default:
        return 'Desconocido';
    }
  }

  EstadoViajeColor(id_estado: number): string {
    switch (id_estado) {
      case 2:
        return 'naranjo';
      case 3:
        return 'rojo';
      default:
        return '';
    }
  }
  //async openModal() {
  //  const modal = await this.modalCtrl.create({
  //    component: VehiculoDetallesComponent,
   // });
   // modal.present();

   // const { data, role } = await modal.onWillDismiss();

    //if (role === 'confirm') {
     // this.message = `Hello, ${data}!`;
   // }
 // }

 // async abrirDetalleVehiculo(vehiculo: any) {
   // //const vehiculo = this.vehiculo.find(v => v.id_vehiculo === id);
    //const modal = await this.modalCtrl.create({
     // component: VehiculoDetallesComponent,
     // componentProps: { vehiculo }
    //});
   // console.log("Datos del vehiculo" , vehiculo);
    //return await modal.present();
  //}

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
