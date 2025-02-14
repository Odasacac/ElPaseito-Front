import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alone',
  standalone: true,
  imports: [],
  templateUrl: './alone.component.html',
  styleUrl: './alone.component.css'
})
export class AloneComponent 
{
  pantallasService = inject(PantallasService);

  rutaImagen = this.pantallasService.getRutaImagen();
  textos = this.pantallasService.getTextos();

  router = inject(Router);

  siguiente()
  {
    let pantallaActiva = this.pantallasService.getPantallaActiva();
    let valorPantallaActive = pantallaActiva();

    switch (valorPantallaActive)
    {
        case 1:
          this.irAPantalla2();
          break;

        case 2:
          this.irAPantalla3();
          break;

        case 99:
          this.irAMenu();
          break;
          
        default:
          this.irARutaNoPermitida();
          break;
    }
  }


  irAPantalla2()
  {
    this.pantallasService.setPantalla1(false);
    this.pantallasService.setPantalla2(true);
    this.router.navigate(['/game/2']);
  }

  irAPantalla3()
  {
    this.pantallasService.setPantalla2(false);
    this.pantallasService.setPantalla3(true);
    this.router.navigate(['/game/3']);
  }

  irARutaNoPermitida()
  {
    this.router.navigate(['nopermitida']);
  }

  irAMenu()
  {
    this.router.navigate(['/inicio/menu']);
  }

}
