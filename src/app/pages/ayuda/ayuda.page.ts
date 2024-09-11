import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],
})
export class AyudaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  clickPerfil(){
    this.router.navigate(['/perfil'])
  }
  
  clickViaje(){
    this.router.navigate(['/viaje'])
  }

  clickVehiculo(){
    this.router.navigate(['/vehiculo'])
  }

  clickInicio(){
    this.router.navigate(['/inicio'])
  }

}
