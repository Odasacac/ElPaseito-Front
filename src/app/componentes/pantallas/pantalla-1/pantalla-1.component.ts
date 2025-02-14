import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../servicios/pantallas.service';
import { AloneComponent } from "../basePantallas/alone/alone.component";

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
    
    const paratexto: String []=[];
    const linea1: String = "Tras salir a pasear, llegas a este lugar."
    paratexto.push(linea1);
    this.pantallasService.setTextos(paratexto);
  }

}
