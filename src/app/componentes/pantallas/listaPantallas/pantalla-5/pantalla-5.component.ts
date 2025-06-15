import { Component, inject } from '@angular/core';
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-5',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-5.component.html',
  styleUrl: './pantalla-5.component.css'
})
export class Pantalla5Component 
{ 
    pantallasService = inject(PantallasService);
      
    pantallaActual: Number = 5;
      
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
      this.pantallasService.setRutaImagen("/images/5.png");
          
      //SETTEAR TEXTOS
      const paraTexto: String []=[];
      const linea1: String = "Durante un buen rato se resistió y prefirió el dolor a la locura."
      paraTexto.push(linea1);
      const linea2:String = "Pero cuando no pudo aguantar más, se desmayó y cayó al suelo entre sangre y lágrimas.";
      paraTexto.push(linea2);
      const linea3:String = "Lo desnudaron, lo vistieron con una túnica blanca y lo dejaron donde cayó.";
      paraTexto.push(linea3);
      this.pantallasService.setTextos(paraTexto);
    }
  

}
