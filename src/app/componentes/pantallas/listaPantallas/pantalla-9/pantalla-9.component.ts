import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { AloneComponent } from "../../basePantallas/alone/alone.component";

@Component({
  selector: 'app-pantalla-9',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-9.component.html',
  styleUrl: './pantalla-9.component.css'
})
export class Pantalla9Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: Number = 9;

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
      this.pantallasService.setRutaImagen("/images/t4.png");
    
      //SETTEAR TEXTOS
      const paraTexto: String []=[];
      const linea1: String = "Te acercas a las montañas y te encuentras con una señal que indica cuatro caminos:"
      paraTexto.push(linea1);
      const linea2: String = "Puedes seguir recto hacia el norte y entrarás en la pradera."
      paraTexto.push(linea2);
      const linea3: String = "Puedes bordear la pradera por el oeste y llegar al extremo de las montañas donde la pendiente es menos pronunciada."
      paraTexto.push(linea3);
      const linea4: String = "Puedes bordear la pradera por el este y llegar al extremo que parece más escarpado, ahí se puede ver que está la torre."
      paraTexto.push(linea4);
      const linea5: String = "También puedes ir al sur a la aldea."
      paraTexto.push(linea5);
    
      this.pantallasService.setTextos(paraTexto);
    }

}
