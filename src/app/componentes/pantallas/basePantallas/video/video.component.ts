import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent 
{
  router = inject(Router);
  pantallasService = inject(PantallasService);
  
  rutaVideo = this.pantallasService.getRutaVideo();

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
