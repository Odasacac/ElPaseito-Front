import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { AloneComponent } from "../../basePantallas/alone/alone.component";

@Component({
  selector: 'app-pantalla-22',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-22.component.html',
  styleUrl: './pantalla-22.component.css'
})
export class Pantalla22Component 
{
   pantallasService = inject(PantallasService);
    
      pantallaActual: Number = 22;
    
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
        this.pantallasService.setRutaImagen("/images/2/19.jpg");
    
        //SETTEAR TEXTOS
        const paraTexto: String []=[];
        const linea1: String = "Miras a tu izquierda."
        paraTexto.push(linea1);
        const linea2: String = "Ves un ciclista, un camino que sube y el sol tras lo árboles."
        paraTexto.push(linea2)
        this.pantallasService.setTextos(paraTexto);
      }
  

}
