import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, Animation, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],
})
export class AyudaPage implements OnInit {
  @ViewChild('modal', { static: true }) modal: IonModal | undefined;

  constructor(private router: Router, private animationCtrl: AnimationController) {}

  ngOnInit() {
    this.setModalAnimations();
  }

  setModalAnimations() {
    const enterAnimation = (baseEl: HTMLElement): Animation => {
      const root = baseEl.shadowRoot;

      // Verificamos si `root` es nulo y seguimos con la animación, pero sin retornar `null`
      const backdropAnimation = this.animationCtrl
        .create()
        .addElement(root?.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl
        .create()
        .addElement(root?.querySelector('.modal-wrapper')!)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' },
        ]);

      return this.animationCtrl
        .create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    };

    const leaveAnimation = (baseEl: HTMLElement): Animation => {
      return enterAnimation(baseEl).direction('reverse');
    };

    // Asegurarse de que `this.modal` esté definido antes de asignar las animaciones
    if (this.modal) {
      this.modal.enterAnimation = enterAnimation;
      this.modal.leaveAnimation = leaveAnimation;
    }
  }

  closeModal() {
    // Asegurar que `this.modal` no sea undefined antes de intentar cerrarlo
    if (this.modal) {
      this.modal.dismiss();
    }
  }

  // Métodos de navegación
  clickPerfil() {
    this.router.navigate(['/perfil']);
  }

  clickViaje() {
    this.router.navigate(['/viaje']);
  }

  clickVehiculo() {
    this.router.navigate(['/vehiculo']);
  }

  clickInicio() {
    this.router.navigate(['/inicio']);
  }
}
