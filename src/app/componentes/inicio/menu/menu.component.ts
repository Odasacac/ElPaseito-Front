import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MainComponent } from '../../core/main/main.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent 
{
  router = inject(Router);

  nuevaPartida()
  {
    this.router.navigate(['/game/0']);
  }

  continuar()
  {
    this.router.navigate(['/inicio/continuar']);
  }

  opciones()
  {
    this.router.navigate(['/inicio/opciones']);
  }

  salir()
  {
    this.router.navigate(['/inicio/bienvenida']);
  }
}
