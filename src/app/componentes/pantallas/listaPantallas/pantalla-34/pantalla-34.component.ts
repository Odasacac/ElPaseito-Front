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
      const linea2: String = "No muy lejos puedes ver tu aldea y el mar."
      paraTexto.push(linea2);
      const linea3: String = "Dejas el bosque atrás y te diriges hacia allí."
      paraTexto.push(linea3);
    
      this.pantallasService.setTextos(paraTexto);
    }

}
