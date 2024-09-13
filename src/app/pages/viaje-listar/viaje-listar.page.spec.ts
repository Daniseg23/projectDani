import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajeListarPage } from './viaje-listar.page';

describe('ViajeListarPage', () => {
  let component: ViajeListarPage;
  let fixture: ComponentFixture<ViajeListarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
