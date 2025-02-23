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

  pantallaActual: Number = 1;

  ngOnInit()
  {
    if(this.pantallasService.prepararPantalla(this.pantallaActual))
    {
      this.prepararPantalla();
    }

  }

  prepararPantalla()
  {
    //SETTEAR RUTA IMAGEN
    this.pantallasService.setRutaImagen("/images/1/1.jpg");
    
    //SETTEAR TEXTOS
    const paraTexto: String []=[];
    const linea1: String = "Saliste pronto de trabajar y decidiste dar un paseo por la montaña."
    paraTexto.push(linea1);
    const linea2: String = "Sin saber muy bien cómo, llegaste a este lugar."
    paraTexto.push(linea2);
    
    this.pantallasService.setTextos(paraTexto);
  }

}
