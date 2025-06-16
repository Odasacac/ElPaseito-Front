import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-21',
  standalone: true,
  imports: [],
  templateUrl: './pantalla-21.component.html',
  styleUrl: './pantalla-21.component.css'
})
export class Pantalla21Component 
{
    pantallasService = inject(PantallasService);  
    pantallaActual: Number = 21;
  
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
      this.pantallasService.setRutaImagen("/images/21.png");
          
      //SETTEAR TEXTOS
      const paraTexto: String []=[];
      const linea1: String = "Vuelves a tu aldea por el desfiladero."
      paraTexto.push(linea1);
      const linea2:String = "Piensas que es el escenario perfecto para sufrir una emboscada.";
      paraTexto.push(linea2);
      const linea3:String = "Pero son solo pensamientos y te distrae la velocidad con la que el viento pasa por esta zona.";
      paraTexto.push(linea3);
      const linea4:String = "Tras un rato andando el camino se abre a la amplitud de la pradera.";
      paraTexto.push(linea4);
      this.pantallasService.setTextos(paraTexto);
    }

}
