import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { AloneComponent } from "../../basePantallas/alone/alone.component";

@Component({
  selector: 'app-pantalla-12',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-12.component.html',
  styleUrl: './pantalla-12.component.css'
})
export class Pantalla12Component 
{
pantallasService = inject(PantallasService);
  
    ngOnInit()
    {
      if (this.pantallasService.getPantalla12())
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
      this.pantallasService.setPantallaActiva(12);
  
      this.pantallasService.setRutaImagen("/images/1/11.jpg");
      
      const paraTexto: String []=[];
      const linea1: String = "Descubres un pequeño sendero oculto entre los matorrales."
      paraTexto.push(linea1);
      const linea2: String = "Se oculta en la maleza."
      paraTexto.push(linea2);
      const linea3: String = "Pero es la manera más rápida de llegar a lo alto, así que lo sigues."
      paraTexto.push(linea3);  
      this.pantallasService.setTextos(paraTexto);
    }
}
