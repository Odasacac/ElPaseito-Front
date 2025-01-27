import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-boton-comenzar',
  standalone: true,
  imports: [],
  templateUrl: './boton-comenzar.component.html',
  styleUrl: './boton-comenzar.component.css'
})
export class BotonComenzarComponent 
{
  router = inject(Router);


  abrirMenu()
  {
    this.router.navigate(["inicio/menu"]);
  }
}
