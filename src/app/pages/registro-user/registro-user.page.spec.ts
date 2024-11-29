import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroUserPage } from './registro-user.page';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { provideHttpClient } from '@angular/common/http';

describe('RegistroUserPage', () => {
  let component: RegistroUserPage;
  let fixture: ComponentFixture<RegistroUserPage>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports:[AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig)],
      providers:[provideHttpClient()]
    })

    fixture = TestBed.createComponent(RegistroUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
