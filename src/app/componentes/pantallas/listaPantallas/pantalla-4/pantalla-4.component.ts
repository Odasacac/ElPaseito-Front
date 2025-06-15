import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { AloneComponent } from "../../basePantallas/alone/alone.component";

@Component({
  selector: 'app-pantalla-4',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-4.component.html',
  styleUrl: './pantalla-4.component.css'
})
export class Pantalla4Component 
{
    pantallasService = inject(PantallasService);
      
    pantallaActual: Number = 4;
      
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
      this.pantallasService.setRutaImagen("/images/4.png");
          
      //SETTEAR TEXTOS
      const paraTexto: String []=[];
      const linea1: String = "En el sueño, Kyum chillaba dentro de una cueva."
      paraTexto.push(linea1);
      const linea2: String = "Era golpeado y forzado a adentrarse más profundo."
      paraTexto.push(linea2);
          
      this.pantallasService.setTextos(paraTexto);
    }
  

}
