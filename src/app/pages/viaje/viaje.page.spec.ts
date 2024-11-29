import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajePage } from './viaje.page';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular'; 

import { of } from 'rxjs'; // Para simular observables

describe('InicioPage', () => {
  let component: ViajePage;
  let fixture: ComponentFixture<ViajePage>;

  const mock = {
    snapshot:{
      params: { test : 'test'}
    }
  } 
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide: ActivatedRoute,useValue:mock},provideHttpClient(),ModalController],
      imports:[ IonicModule.forRoot() ,AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig)],
    })

    fixture = TestBed.createComponent(ViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});