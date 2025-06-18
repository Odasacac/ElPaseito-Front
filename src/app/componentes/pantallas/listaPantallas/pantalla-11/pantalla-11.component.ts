import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { EstadoJuegoService } from '../../../../servicios/estado-juego.service';
import { AloneComponent } from "../../basePantallas/alone/alone.component";

@Component({
  selector: 'app-pantalla-11',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-11.component.html',
  styleUrl: './pantalla-11.component.css'
})
export class Pantalla11Component 
{
    pantallasService = inject(PantallasService);
  
    pantallaActual: number = 11;
  
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
      this.pantallasService.setRutaImagen("/images/11.png");
      
      //SETTEAR TEXTOS
      const paraTexto: String []=[];
      const linea1: String = "La ruta que lleva hasta el extremo oeste de la montaña es larga."
      paraTexto.push(linea1);
      const linea2: String = "Discurre entre matorrales y algunos árboles."
      paraTexto.push(linea2);
      const linea3: String = "Y es agradable cómo el sendero discurre entre el paisaje."
      paraTexto.push(linea3);

      
      
      this.pantallasService.setTextos(paraTexto);
    }

}
