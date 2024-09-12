import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoListarPage } from './vehiculo-listar.page';

describe('VehiculoListarPage', () => {
  let component: VehiculoListarPage;
  let fixture: ComponentFixture<VehiculoListarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
