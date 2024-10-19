import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {

  correo: string= "";

  constructor(private firebase:FirebaseService) { }

  ngOnInit() {
  }

  registro(){
    this.firebase.resetPassWord(this.correo);
  }

}
