import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonInput, IonButton
} from '@ionic/angular';
import { DatosService } from '../services/datos';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: './tab1.page.html',
  imports: [
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonInput, IonButton
  ]
})
export class Tab1Page {
  nombre = '';
  contador = 0;
  mensaje = '';
  direccion = '';
  edad = '';

  private datos = inject(DatosService);
  private router = inject(Router);

  aumentar(): void {
    this.contador++;
  }

  disminuir(): void {
    if (this.contador > 0) {
      this.contador--;
    }
  }

  reiniciar(): void {
    this.contador = 0;
  }

  enviar(): void {
    const nombreLimpio = this.nombre.trim();
    const direccionLimpia = this.direccion.trim();
    const edadLimpia = this.edad.trim();

    if (!nombreLimpio || !direccionLimpia || !edadLimpia) {
      this.mensaje = 'Ingresa todos los datos antes de continuar.';
      return;
    }


    this.mensaje = '';
    this.datos.guardar(nombreLimpio, this.contador, direccionLimpia, parseInt(edadLimpia, 10));
    this.router.navigateByUrl('/tabs/tab2');
  }
}