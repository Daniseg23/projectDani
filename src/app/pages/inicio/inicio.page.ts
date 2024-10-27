//En este apartado se crean funciones
//Se crean métodos
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewDidEnter, ViewWillEnter, ViewDidLeave, ViewWillLeave } from '@ionic/angular';

import { ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserModel } from 'src/app/models/usuario';
import { ViajeService } from 'src/app/services/viaje.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit, ViewWillEnter, ViewDidEnter, ViewWillLeave, ViewDidLeave{
  
  correo: string = "";
  loaded: boolean = false;
  nombre: string = "";
  usuario: UserModel[]=[];
  viajes: any[]=[];

  @ViewChild(IonCard, { read: ElementRef }) card: ElementRef<HTMLModElement> | undefined;
  private animation: Animation | undefined;

  constructor(private router:Router,
              private activateRoute:ActivatedRoute,
              private animationCtrl: AnimationController,
              private firebase:FirebaseService,
              private usuarioService:UsuarioService,
              private storage:StorageService,
              private viajeService:ViajeService,
              private helper:HelperService
  ) { }

  seleccionarViaje(parId:number){
    console.log("Viaje seleccionado ", parId);
    
  }

  //async cargarViajes(){
  //  let dataStorage = await this.storage.obtenerStorage();
  //  const req = await this.viajeService.obtenerViaje(dataStorage[0].token);
  //  this.viajes = req.data;
 // }

  async cargarUsuario(){
    let dataStorage = await this.storage.obtenerStorage();
    
    const req = await this.usuarioService.obtenerUsuario(
      {
        p_correo:dataStorage[0].usuario_correo,
        token:dataStorage[0].token
      }
    );
    this.usuario = req.data;
    this.nombre = this.usuario[0].nombre;
    console.log("DATA INICIO USUARIO ", this.usuario);
    console.log("Nombre usuario ", this.nombre);
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

  //-------------------------

  ngOnInit() {
   // this.cargarViajes();
    this.cargarUsuario();
    this.correo = this.activateRoute.snapshot.params["correo"];
    console.log("PARAMETRO URL ---> ", this.correo);

    setTimeout(() =>{
      this.loaded = true;
    },4000)

  }
  clickFunction() {
    console.log('Card clicked!');
  }

  clickFunctionPerfil() {
    this.router.navigate(['/perfil']);
  }

  clickFunctionViaje() {
    this.router.navigate(['/viaje']);
  }

  clickFunctionVehiculo() {
    this.router.navigate(['/vehiculo']);
  }

  clickFunctionAyuda() {
    this.router.navigate(['/ayuda']);
  }

  cerrarSesion(){
    this.router.navigateByUrl('/login')
  }

  async logout(){
    const confirmar = await this.helper.showConfirm("¿Esta seguro que desea cerrar sesion?");
    if(confirmar){
      this.firebase.logout();
      this.router.navigateByUrl('/login');
    }
  }
}
