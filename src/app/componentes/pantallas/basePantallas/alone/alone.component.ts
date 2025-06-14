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
  router = inject(Router);
  pantallasService = inject(PantallasService);

  rutaImagen = this.pantallasService.getRutaImagen();
  textos = this.pantallasService.getTextos();



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

        case 1:
          this.irAPantalla2();
          break;










        //-----------------------

        case 99:
          this.irAMenu();
          break;
          
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

  //-----------------------


  irAPantalla2()
  {
    this.pantallasService.resetPantalla(1);
    this.pantallasService.setPantalla(2);
    this.router.navigate(['/game/2']);
  }  











    
  //-----------------------


  
  irARutaNoPermitida()
  {
    this.router.navigate(['nopermitida']);
  }

  irAMenu()
  {
    this.router.navigate(['/inicio/menu']);
  }


}
