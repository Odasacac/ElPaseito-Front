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
        /*
          Ir poniendo aquí los:

            case X:
              this.irAPantallaB();
              break;
        */
       
        //-----------------------














        //-----------------------

          
        default:
          this.irARutaNoPermitida();
          break;
    }
  }


  /*
    Ir poniendo aquí los:

       irAPantallaB()
        {
          this.pantallasService.resetPantalla(A);
          this.pantallasService.setPantalla(B);
          this.router.navigate(['/game/B']);
        }            
  
    */
  
  
  irARutaNoPermitida()
  {
    this.router.navigate(['nopermitida']);
  }

}
