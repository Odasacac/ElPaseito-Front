import { Component, inject } from '@angular/core';
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-18',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-18.component.html',
  styleUrl: './pantalla-18.component.css'
})
export class Pantalla18Component 
{
    pantallasService = inject(PantallasService);
  
    pantallaActual: number = 18;
  
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
      const linea1: String = "Un sendero se abre paso entre rocas, peñascos y piedras."
      paraTexto.push(linea1);
      const linea2: String = "En la profundidad puedes ver las cumbres afiladas."
      paraTexto.push(linea2);
      const linea3: String = "Poco a poco el sendero va cogiendo altitud."
      paraTexto.push(linea3);
      
      this.pantallasService.setTextos(paraTexto);
    }

}
