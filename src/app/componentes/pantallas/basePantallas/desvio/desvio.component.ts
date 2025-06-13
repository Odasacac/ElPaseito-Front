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
      /*
        Ir poniendo aquí los:

          case X:
              this.seleccionEnPantallaX(indice);
              break;
      */
      //-----------------------




      

       
      //-----------------------
   
        default:
          this.irARutaNoPermitida()
    }
  }

 /*
    Ir aqui poniendo los:

      seleccionEnPantallaA(imagen: Number)
      {
        this.pantallasService.resetPantalla(A);

        switch (imagen)
        {
            case 0:
            this.irAPantallaRendirse();
            break;

            case 1:
            this.irAPantallaB();
            break; 
                    
            default:
              this.irARutaNoPermitida(); 
            break;
          }
      }
  */
  //-----------------------















  //-----------------------



  /*
    Ir poniendo aquí los:

      irAPantallaB()
      {
        this.pantallasService.setPantalla(B);
        this.router.navigate(['/game/B']);
      }            
  
    */

  //-----------------------











  //-----------------------

  irAPantallaRendirse()
  {
    this.pantallasService.setPantallaAbandono(true);
    this.router.navigate(['/game/abandono']);
  }



  irARutaNoPermitida()
  {
    this.router.navigate(['nopermitida']);
  }

}
