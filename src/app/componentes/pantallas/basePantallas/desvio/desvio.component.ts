import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desvio',
  standalone: true,
  imports: [],
  templateUrl: './desvio.component.html',
  styleUrl: './desvio.component.css'
})
export class DesvioComponent 
{
  router = inject(Router);
  pantallasService = inject(PantallasService);

  opciones = this.pantallasService.getOpcionesDesvio();
  rutaImagen = this.pantallasService.getRutaImagen();
  textos = this.pantallasService.getTextos();

  textoDesvio: String = "¿Qué harás?";

  
  clickEn(indice: Number)
  {
    let pantallaActiva = this.pantallasService.getPantallaActiva()();

    switch (pantallaActiva)
    {
        case 8:
          this.seleccionEnPantalla8(indice);
          break;
   
        default:
          this.irARutaNoPermitida()
    }
  }


  seleccionEnPantalla8(imagen: Number)
  {
    this.pantallasService.setPantalla8(false);

    switch (imagen)
    {
      case 0: //Sigue el camino
        this.irAPantalla11();
        break;
      case 1: //Entra a la cueva
        this.irAPantalla9();
        break;
      default:
        this.irARutaNoPermitida();
        break;
    }
  }

  irAPantalla9()
  {
    this.pantallasService.setPantalla9(true);
    this.router.navigate(['/game/9']);
  }

  irAPantalla11()
  {
    this.pantallasService.setPantalla11(true);
    this.router.navigate(['/game/11']);
  }



  irARutaNoPermitida()
  {
    this.router.navigate(['nopermitida']);
  }

}
