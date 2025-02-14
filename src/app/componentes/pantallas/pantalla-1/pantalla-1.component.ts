import { Component, inject } from '@angular/core';
import { NuevoPersonaje } from '../../../interfaces/NuevoPersonaje';
import { PersonajeService } from '../../../servicios/personaje.service';
import { ConfiguracionService } from '../../../servicios/configuracion.service';
import { Campo } from '../../../interfaces/campos';
import { PantallasService } from '../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-1',
  standalone: true,
  imports: [],
  templateUrl: './pantalla-1.component.html',
  styleUrl: './pantalla-1.component.css'
})
export class Pantalla1Component 
{
 /*
    Aqui se llega desde Pantalla0Component

    Es el inicio del juego, el personaje ya está creado y almacenado en PersonajeService

 */
  pantallasService = inject(PantallasService);

  ngOnInit()
  {
    if (this.pantallasService.getPantalla1())
    {
      this.pantallasService.setVisible(true);
    }
    else
    {
      this.pantallasService.setVisible(false);
    } 
  }


}
