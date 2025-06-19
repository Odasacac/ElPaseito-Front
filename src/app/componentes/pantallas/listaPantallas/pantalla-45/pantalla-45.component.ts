import { Component, inject } from '@angular/core';
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-45',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-45.component.html',
  styleUrl: './pantalla-45.component.css'
})
export class Pantalla45Component 
{
     pantallasService = inject(PantallasService);
        
      pantallaActual: number = 45;
        
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
        const linea1: String = "Al poco rato ves la salida del bosque."
        paraTexto.push(linea1);
        const linea2: String = "Y más a lo lejos la señal de las montañas."
        paraTexto.push(linea2);
        const linea3: String = "Vas en esa dirección."
        paraTexto.push(linea3);
            
        this.pantallasService.setTextos(paraTexto);
      }
    

}
