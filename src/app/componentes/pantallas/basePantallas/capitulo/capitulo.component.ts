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

  numeroCapitulo = this.pantallasService.getNumeroCapitulo();
  nombreCapitulo = this.pantallasService.getNombreCapitulo();
  tituloCapitulo: String = "Capítulo - ";

  router = inject(Router);

  siguiente()
  {
    let pantallaActiva = this.pantallasService.getPantallaActiva()();

    switch (pantallaActiva)
    {
        case 4:
          this.irAPantalla5();
          break;

        case 19:
          this.irAPantalla20();
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

  irAPantalla20()
  {
    this.pantallasService.resetPantalla(19);
    this.pantallasService.setPantalla(20);
    this.router.navigate(['/game/20']);
  }
  
  
  irARutaNoPermitida()
  {
    this.router.navigate(['nopermitida']);
  }

}
