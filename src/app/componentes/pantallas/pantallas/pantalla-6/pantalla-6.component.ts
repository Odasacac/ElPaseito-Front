import { Component, inject } from '@angular/core';
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-6',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-6.component.html',
  styleUrl: './pantalla-6.component.css'
})
export class Pantalla6Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: Number = 6;

  ngOnInit()
  {
    if(this.pantallasService.prepararPantalla(this.pantallaActual))
    {
      this.prepararPantalla();
    }

  }

  prepararPantalla()
  {
  
    this.pantallasService.setRutaImagen("/images/1/4.jpg");
      
    const paraTexto: String []=[];
    const linea1: String = "Hace un buen día, se ve el mar."
    paraTexto.push(linea1);
    const linea2: String = "Es curioso que incluso desde aquí aún se oiga el ruido de la ciudad."
    paraTexto.push(linea2);
    const linea3: String = "¿A cuánto ruido nos habremos acostumbrado que sólo lo notamos cuando nos alejamos?"
    paraTexto.push(linea3);
    const linea4: String = "Entre vagos pensamientos sigues el camino que se acaba adentrando en el bosque."
    paraTexto.push(linea4);
    this.pantallasService.setTextos(paraTexto);
  }

}
