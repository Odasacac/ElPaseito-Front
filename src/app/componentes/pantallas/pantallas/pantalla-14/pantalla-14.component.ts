import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { AloneComponent } from "../../basePantallas/alone/alone.component";

@Component({
  selector: 'app-pantalla-14',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-14.component.html',
  styleUrl: './pantalla-14.component.css'
})
export class Pantalla14Component 
{
  pantallasService = inject(PantallasService);
  
    ngOnInit()
    {
      if (this.pantallasService.getPantalla14())
      {
        this.prepararPantalla();
      }
      else
      {
        this.pantallasService.setVisible(false);
      }
  
    }
  
    prepararPantalla()
    {
      this.pantallasService.setVisible(true);
      this.pantallasService.setPantallaActiva(14);
  
      this.pantallasService.setRutaImagen("/images/1/13.jpg");
      
      const paraTexto: String []=[];
      const linea1: String = "Tras atravesar las zonas densas, el camino se vuelve de nuevo transitable."
      paraTexto.push(linea1);
      const linea2: String = "El sol está cada vez más cerca y no parece que haya muchos obstáculos."
      paraTexto.push(linea2);
      this.pantallasService.setTextos(paraTexto);
    }

}
