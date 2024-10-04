import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fire:AngularFireAuth) { }

  async login(email:string, contrasena:string){
    /*const request = await this.fire.signInWithEmailAndPassword(email, contrasena);
    return request; */

    try{
      return await this.fire.signInWithEmailAndPassword(email, contrasena);
    }catch (error: any){
      throw error;
    }
  }
}
