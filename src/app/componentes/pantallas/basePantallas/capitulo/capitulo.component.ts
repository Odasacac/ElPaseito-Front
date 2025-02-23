import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-capitulo',
  standalone: true,
  imports: [],
  templateUrl: './capitulo.component.html',
  styleUrl: './capitulo.component.css'
})
export class CapituloComponent 
{
  pantallasService = inject(PantallasService);

  nombreCapitulo = this.pantallasService.getNombreCapitulo();

  router = inject(Router);

  siguiente()
  {
    let pantallaActiva = this.pantallasService.getPantallaActiva()();

    switch (pantallaActiva)
    {
        case 4:
          this.irAPantalla5();
          break;
          
        default:
          this.irARutaNoPermitida();
          break;
    }
  }

  
  irAPantalla5()
  {
    this.pantallasService.resetPantalla(4);
    this.pantallasService.setPantalla(5);
    this.router.navigate(['/game/5']);
  }
  
  irARutaNoPermitida()
  {
    this.router.navigate(['nopermitida']);
  }

}
