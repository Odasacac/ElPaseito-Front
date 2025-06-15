import { Component, inject } from '@angular/core';
import { AbandonoComponent } from "../abandono/abandono.component";
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-7',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-7.component.html',
  styleUrl: './pantalla-7.component.css'
})
export class Pantalla7Component 
{

    pantallasService = inject(PantallasService);
      
    pantallaActual: Number = 7;
      
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
      this.pantallasService.setRutaImagen("/images/7.png");
          
      //SETTEAR TEXTOS
      const paraTexto: String []=[];
      const linea1: String = "La torre es muy similar a la que se encuentra en las montañas del valle."
      paraTexto.push(linea1);
      const linea2: String = "Solo que el entorno es bastante distinto."
      paraTexto.push(linea2);
      const linea3: String = "Y aunque hace años que nadie lo hace, no está prohibido subir a esa zona."
      paraTexto.push(linea3);
      const linea4: String = "Hasta donde sabes la torre está abandonada, pero piensas que es un buen lugar desde el cual comenzar a buscar."
      paraTexto.push(linea4);
          
      this.pantallasService.setTextos(paraTexto);
    }
  

}
