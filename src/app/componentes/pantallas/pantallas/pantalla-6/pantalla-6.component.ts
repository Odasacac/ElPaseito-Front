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
    const linea1: String = "Hace un buen día, se llega a ver el mar."
    paraTexto.push(linea1);
    const linea2: String = "Desde aquí aún se oye el ruido de la ciudad."
    paraTexto.push(linea2);
    const linea3: String = "Entre vagos pensamientos sigues el camino y te adentras en el bosque."
    paraTexto.push(linea3);
    this.pantallasService.setTextos(paraTexto);
  }

}
