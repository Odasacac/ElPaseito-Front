import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ruta-incorrecta',
  standalone: true,
  imports: [],
  templateUrl: './ruta-incorrecta.component.html',
  styleUrl: './ruta-incorrecta.component.css'
})
export class RutaIncorrectaComponent 
{
  router = inject(Router);
    
  salir()
  {
    this.router.navigate(['/inicio/bienvenida']);
  }
}
