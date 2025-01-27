import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opciones',
  standalone: true,
  imports: [],
  templateUrl: './opciones.component.html',
  styleUrl: './opciones.component.scss'
})
export class OpcionesComponent 
{
   router = inject(Router)
  
    volverAMenu()
    {
      this.router.navigate(['inicio/menu/']);
    }
}
