import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { AloneComponent } from "../../basePantallas/alone/alone.component";

@Component({
  selector: 'app-pantalla-21',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-21.component.html',
  styleUrl: './pantalla-21.component.css'
})
export class Pantalla21Component 
{
   pantallasService = inject(PantallasService);
  
    pantallaActual: Number = 21;
  
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
      this.pantallasService.setRutaImagen("/images/2/20.jpg");
  
      //SETTEAR TEXTOS
      const paraTexto: String []=[];
      const linea1: String = "Miras a tu derecha."
      paraTexto.push(linea1);
      const linea2: String = "Ves un camino que baja y no parece dejar de hacerlo."
      paraTexto.push(linea2)
      this.pantallasService.setTextos(paraTexto);
    }

}
