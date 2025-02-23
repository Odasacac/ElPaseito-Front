import { Component, inject } from '@angular/core';
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PantallasService } from '../../../../servicios/pantallas.service';
import { PersonajeService } from '../../../../servicios/personaje.service';

@Component({
  selector: 'app-pantalla-10',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-10.component.html',
  styleUrl: './pantalla-10.component.css'
})
export class Pantalla10Component 
{
  pantallasService = inject(PantallasService);
  personajeService = inject(PersonajeService);

  pantallaActual: Number = 10;
 
  ngOnInit()
  {
    if(this.pantallasService.prepararPantalla(this.pantallaActual))
    {
      this.prepararPantalla();
    }
 
  }
  
  prepararPantalla()
  {
    this.pantallasService.setRutaImagen("/images/1/9.jpg");
      
    const paraTexto: String []=[];
    const linea1: String = "Hay muchas zarzas y habría que pasar prácticamente agachado."
    paraTexto.push(linea1);
    const linea2: String = "Decides volver por donde habías venido y seguir por donde ibas."
    paraTexto.push(linea2);
    this.pantallasService.setTextos(paraTexto);

    this.personajeService.aumentarExploracion(1);
  }

}
