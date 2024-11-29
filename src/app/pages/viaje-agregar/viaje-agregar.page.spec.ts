import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajeAgregarPage } from './viaje-agregar.page';
import { provideHttpClient } from '@angular/common/http';


describe('ViajeAgregarPage', () => {
  let component: ViajeAgregarPage;
  let fixture: ComponentFixture<ViajeAgregarPage>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers:[provideHttpClient()]
    })

    fixture = TestBed.createComponent(ViajeAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
