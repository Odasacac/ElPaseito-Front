import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notdefined',
  standalone: true,
  imports: [],
  templateUrl: './notdefined.component.html',
  styleUrl: './notdefined.component.css'
})
export class NotdefinedComponent 
{
      router = inject(Router);
      pantallaIndefinidaTexto1: String = "Pantalla indefinida. Escenario en construcción.";
      pantallaIndefinidaTexto2: String = "Preventivamente la redirección te envía al menú principal.";
        
      salir()
      {
        this.router.navigate(['/inicio/bienvenida']);
      }

}
