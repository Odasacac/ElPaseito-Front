import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { AbandonoComponent } from "../../abandono/abandono.component";
import { AloneComponent } from "../../basePantallas/alone/alone.component";

@Component({
  selector: 'app-pantalla-13',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-13.component.html',
  styleUrl: './pantalla-13.component.css'
})
export class Pantalla13Component 
{
pantallasService = inject(PantallasService);
  
    ngOnInit()
    {
      if (this.pantallasService.getPantalla13())
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
      this.pantallasService.setPantallaActiva(13);
  
      this.pantallasService.setRutaImagen("/images/1/12.jpg");
      
      const paraTexto: String []=[];
      const linea1: String = "El sendero no es tan fácil de seguir como parecía al principio."
      paraTexto.push(linea1);
      const linea2: String = "Pero a lo lejos se ve la luz del sol y la cima parece cercana."
      paraTexto.push(linea2);
      const linea3: String = "Decides abrirte paso entre las ramas."
      paraTexto.push(linea3);
      this.pantallasService.setTextos(paraTexto);
    }
}
