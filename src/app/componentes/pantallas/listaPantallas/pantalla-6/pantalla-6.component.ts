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
      //SETTEAR RUTA IMAGEN
      this.pantallasService.setRutaImagen("/images/6.png");
          
      //SETTEAR TEXTOS
      const paraTexto: String []=[];
      const linea1: String = "Aún había más."
      paraTexto.push(linea1);
      const linea2: String = "En el sueño se veía la luna llena."
      paraTexto.push(linea2);
      const linea3: String = "Una amplia cordillera siendo golpeada por la tempestad."
      paraTexto.push(linea3);
      const linea4: String = "Y una torre con una fuerte luz roja en lo alto de un collado."
      paraTexto.push(linea4);
          
      this.pantallasService.setTextos(paraTexto);
    }
  


}
