import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  contrasena: String | undefined;
  correo: String | undefined;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  register(){
    this.router.navigate(["/registro-user"])
  }

  login() {
    if (this.correo == "") {
      alert("Ingrese un correo");
      return;
    }
    if (this.contrasena == "") {
      alert("Ingrese una contraseña");
      return;
    }
    if (this.correo == "duocsanjoaquin@duocuc.cl" && this.contrasena == 'duoc123') {
      this.router.navigateByUrl('/inicio/' + 100);
    } else {
      alert("Credenciales incorrectas.");
    }
  }
}
