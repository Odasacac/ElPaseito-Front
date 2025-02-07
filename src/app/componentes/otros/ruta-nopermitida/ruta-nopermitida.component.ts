import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-nopermitida',
  standalone: true,
  imports: [],
  templateUrl: './ruta-nopermitida.component.html',
  styleUrl: './ruta-nopermitida.component.css'
})
export class RutaNopermitidaComponent 
{
    router = inject(Router);
      
    salir()
    {
      this.router.navigate(['/inicio/bienvenida']);
    }

}
