import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bifurcacion',
  standalone: true,
  imports: [],
  templateUrl: './bifurcacion.component.html',
  styleUrl: './bifurcacion.component.css'
})
export class BifurcacionComponent 
{
  router = inject(Router);
  pantallasService = inject(PantallasService);
  
  rutasImagenes = this.pantallasService.getRutasParaBifurcacion();

  textoBifurcacion: String = "¿Qué decides?";

  clickEn(indice: Number)
  {
    let pantallaActiva = this.pantallasService.getPantallaActiva()();

    switch (pantallaActiva)
    {
        case 3:
          this.seleccionEnPantalla3(indice);
          break;
   
        default:
          this.irARutaNoPermitida()
    }
  }


  seleccionEnPantalla3(imagen: Number)
  {
    this.pantallasService.resetPantalla(3);

    switch (imagen)
    {
      case 0:
        this.irAPantallaRendirse();
        break;
      case 1:
        this.irAPantalla4();
        break;
      default:
        this.irARutaNoPermitida();
        break;
    }
  }

  irAPantalla4()
  {
    this.pantallasService.setPantalla(4);
    this.router.navigate(['/game/4']);
  }

  irARutaNoPermitida()
  {
    this.router.navigate(['nopermitida']);
  }

  irAPantallaRendirse()
  {
    this.pantallasService.setPantallaAbandono(true);
    this.router.navigate(['/game/abandono']);
  }
}
