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
      
    pantallaActual: number = 7;
      
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
      this.pantallasService.setRutaImagen("/images/"+this.pantallaActual+".png");
          
      //SETTEAR TEXTOS
      const paraTexto: String []=[];
      const linea1: String = "La torre es muy similar a la que se encuentra en las montañas que rodean tu aldea."
      paraTexto.push(linea1);
      const linea2: String = "Solo que el entorno es bastante distinto al del sueño."
      paraTexto.push(linea2);
      const linea3: String = "No está prohibido subir donde está la torre, pero hace años que nadie lo hace y hasta donde sabes, está abandonada"
      paraTexto.push(linea3);
      const linea4: String = "Piensas que puede ser un buen lugar desde el cual comenzar a buscar y sales en esa dirección."
      paraTexto.push(linea4);
          
      this.pantallasService.setTextos(paraTexto);
    }
  

}
