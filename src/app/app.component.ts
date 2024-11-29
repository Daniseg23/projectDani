import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.checkInitialLoad();
  }

  checkInitialLoad() {
    const hasReloaded = sessionStorage.getItem('hasReloaded');
    if (!hasReloaded) {
      // Marcar que la app se ha recargado y recargar la página
      sessionStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    }
  }
}