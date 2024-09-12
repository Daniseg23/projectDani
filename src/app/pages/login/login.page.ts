import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
login() {
throw new Error('Method not implemented.');
}
contrasena: String | undefined;
correo: String | undefined;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  register(){
    this.router.navigate(["/registro-user"])
  }

}
