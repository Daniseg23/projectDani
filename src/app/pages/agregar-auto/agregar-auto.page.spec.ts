import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarAutoPage } from './agregar-auto.page';
import { provideHttpClient } from '@angular/common/http';

describe('AgregarAutoPage', () => {
  let component: AgregarAutoPage;
  let fixture: ComponentFixture<AgregarAutoPage>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers:[provideHttpClient()]
    })

    fixture = TestBed.createComponent(AgregarAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('campos del vehiculo', async () => {
      // Asignar valores al formulario
      component.marca = 'Toyota';
      component.modelo = 'Corolla';
      component.anio = 2020;
      component.color = 'Rojo';
      component.patente = 'ABC123';
      component.tipo_combustible = 'Gasolina';
      expect(component.marca
        && component.modelo
        && component.anio
        && component.color
        && component.patente
        && component.tipo_combustible
      ).toBeTruthy();
  });
});