import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { AloneComponent } from "../../basePantallas/alone/alone.component";

@Component({
  selector: 'app-pantalla-15',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-15.component.html',
  styleUrl: './pantalla-15.component.css'
})
export class Pantalla15Component 
{
  pantallasService = inject(PantallasService);
  
    ngOnInit()
    {
      if (this.pantallasService.getPantalla15())
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
      this.pantallasService.setPantallaActiva(15);
  
      this.pantallasService.setRutaImagen("/images/1/14.jpg");
      
      const paraTexto: String []=[];
      const linea1: String = "Sin embargo, llegas a un momento en el que seguir subiendo es realmente difícil."
      paraTexto.push(linea1);
      const linea2: String = "La vegetación es abundante y el suelo algo resbaldizo debido a las lluvias de los últimos días."
      paraTexto.push(linea2);
      const linea3: String = "Pruebas a bordear en busca de un acceso más seguro."
      paraTexto.push(linea3);
      this.pantallasService.setTextos(paraTexto);
    }

}
