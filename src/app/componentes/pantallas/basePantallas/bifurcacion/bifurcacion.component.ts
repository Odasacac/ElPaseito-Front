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


  irARutaNoPermitida()
  {
    this.router.navigate(['nopermitida']);
  }

  irAPantallaRendirse()
  {
    this.pantallasService.setPantallaAbandono(true);
    this.router.navigate(['/game/abandono']);
  }

  irANotDefined()
  {
    this.pantallasService.setPantallaIndefinida(true);
    this.router.navigate(['/game/notdefined']);
  }
}
