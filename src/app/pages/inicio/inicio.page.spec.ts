import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioPage } from './inicio.page';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular';

describe('InicioPage', () => {
  let component: InicioPage;
  let fixture: ComponentFixture<InicioPage>;

  const mock = {
    snapshot:{
      params: { test : 'test'}
    }
  } 

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports:[ CommonModule,AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig)],
      providers: [provideHttpClient(), { provide: ActivatedRoute, useValue: mock, ModalController }] 
    })

    fixture = TestBed.createComponent(InicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});