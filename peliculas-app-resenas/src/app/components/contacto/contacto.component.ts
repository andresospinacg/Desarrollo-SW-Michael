import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FormularioContacto {
  nombre: string;
  email: string;
  mensaje: string;
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ContactoComponent {
  formulario: FormularioContacto = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  enviarFormulario(): void {
    // Aquí implementaríamos la lógica para enviar el formulario
    console.log('Formulario enviado:', this.formulario);
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    this.formulario = {
      nombre: '',
      email: '',
      mensaje: ''
    };
  }
} 