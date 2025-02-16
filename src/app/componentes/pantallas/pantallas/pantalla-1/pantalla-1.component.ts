import { Component, inject } from '@angular/core';
import { AloneComponent } from '../../basePantallas/alone/alone.component';
import { PantallasService } from '../../../../servicios/pantallas.service';


@Component({
  selector: 'app-pantalla-1',
  standalone: true,
  imports: [AloneComponent],
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
      this.prepararPantalla();
    }
    else
    {
      this.pantallasService.setVisible(false);
    }

  }

  prepararPantalla()
  {
    this.pantallasService.setVisible(true);
    this.pantallasService.setPantallaActiva(1);

    this.pantallasService.setRutaImagen("/images/1/1.jpg");
    
    const paraTexto: String []=[];
    const linea1: String = "Sin darte cuenta te encuentras en este lugar."
    paraTexto.push(linea1);
    const linea2: String = "Saliste pronto de trabajar y decidiste dar un paseo por la montaña."
    paraTexto.push(linea2);
    const linea3: String = "Tu objetivo era y sigue siendo ver un atardecer bonito desde un lugar cómodo."
    paraTexto.push(linea3);
    const linea4: String = "No es tarde, pero tampoco tienes todo el tiempo del mundo."
    paraTexto.push(linea4);
    
    this.pantallasService.setTextos(paraTexto);
  }

}
