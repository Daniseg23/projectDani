//En este apartado se crean funciones
//Se crean métodos
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
yourFunction() {
throw new Error('Method not implemented.');
}
  
  correo: string = "";
  activateRouter: any;

  constructor() { }

  ngOnInit() {
    this.correo = this.activateRouter.snapshot.params["correo"];
    console.log("PARAMETRO URL ---> ", this.correo);
  }
  clickFunction() {
    console.log('Card clicked!');
  }

}
