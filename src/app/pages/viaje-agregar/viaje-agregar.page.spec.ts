import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajeAgregarPage } from './viaje-agregar.page';

describe('ViajeAgregarPage', () => {
  let component: ViajeAgregarPage;
  let fixture: ComponentFixture<ViajeAgregarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
