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
      case 18:
        this.irAPantalla19();
        break;
             
      default:
        this.irARutaNoPermitida();
        break;
    }
  }

  irAPantalla19()
  {
    this.pantallasService.resetPantalla(18);
    this.pantallasService.setPantalla(19);
    this.router.navigate(['/game/19']);
  }


  irARutaNoPermitida()
  {
    this.router.navigate(['nopermitida']);
  }


}
