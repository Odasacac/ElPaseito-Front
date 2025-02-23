import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { VideoComponent } from '../../basePantallas/video/video.component';
import { PersonajeService } from '../../../../servicios/personaje.service';

@Component({
  selector: 'app-pantalla-18',
  standalone: true,
  imports: [VideoComponent],
  templateUrl: './pantalla-18.component.html',
  styleUrl: './pantalla-18.component.css'
})
export class Pantalla18Component 
{
  pantallasService = inject(PantallasService);
  personajeService = inject(PersonajeService)

  pantallaActual: Number = 18;

  ngOnInit()
  {
      if(this.pantallasService.prepararPantalla(this.pantallaActual))
      {
          this.prepararPantalla();
          this.pantallasService.guardarPartida();
      }
  }

  prepararPantalla()
  {
    //SETTEAR RUTA VIDEO
    this.pantallasService.setRutaVideo("/videos/17.mp4");

    this.personajeService.setCapitulo(2);
  }

}
