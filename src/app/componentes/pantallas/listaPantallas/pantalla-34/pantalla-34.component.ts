import { Component, inject } from '@angular/core';
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-34',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-34.component.html',
  styleUrl: './pantalla-34.component.css'
})
export class Pantalla34Component 
{
    pantallasService = inject(PantallasService);
      
    pantallaActual: number = 34;
      
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
      const linea1: String = "Pareces haber salido del bosque."
      paraTexto.push(linea1);
      const linea2: String = "Te dio la sensación de que fuese más profundo y extenso."
      paraTexto.push(linea2);
      const linea3: String = "¿Te habrás perdido?"
      paraTexto.push(linea3);
      const linea4: String = "Quizás sólo cruzaste por un extremo."
      paraTexto.push(linea4);
      const linea5: String = "Contemplas el mar y tu aldea y decides volver a descansar un poco."
      paraTexto.push(linea5);
    
      this.pantallasService.setTextos(paraTexto);
    }

}
