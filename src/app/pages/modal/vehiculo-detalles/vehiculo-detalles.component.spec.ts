import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehiculoDetallesComponent } from './vehiculo-detalles.component';
import { ModalController } from '@ionic/angular';

describe('VehiculoDetallesComponent', () => {
  let component: VehiculoDetallesComponent;
  let fixture: ComponentFixture<VehiculoDetallesComponent>;

  beforeEach(waitForAsync(() => {

    
    TestBed.configureTestingModule({
      declarations: [ VehiculoDetallesComponent ],
      imports: [IonicModule.forRoot()],
      providers: [ModalController]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
