import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoPage } from './vehiculo.page';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { of } from 'rxjs'; // Para simular observables

describe('InicioPage', () => {
  let component: VehiculoPage;
  let fixture: ComponentFixture<VehiculoPage>;

  const mock = {
    snapshot:{
      params: { test : 'test'}
    }
  } 
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide: ActivatedRoute,useValue:mock},provideHttpClient(),ModalController],
      imports:[IonicModule.forRoot(), AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig)],
    })

    fixture = TestBed.createComponent(VehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});