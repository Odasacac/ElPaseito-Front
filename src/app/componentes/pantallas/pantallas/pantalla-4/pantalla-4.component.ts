import { Component, inject } from '@angular/core';
import { AloneComponent } from '../../basePantallas/alone/alone.component';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { CapituloComponent } from "../../basePantallas/capitulo/capitulo.component";


@Component({
  selector: 'app-pantalla-4',
  standalone: true,
  imports: [AloneComponent, CapituloComponent],
  templateUrl: './pantalla-4.component.html',
  styleUrl: './pantalla-4.component.css'
})
export class Pantalla4Component 
{
  pantallasService = inject(PantallasService);
  
    ngOnInit()
    {
      if (this.pantallasService.getPantalla4())
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
      this.pantallasService.setPantallaActiva(4);
  
      this.pantallasService.setNombreCapitulo("Capítulo 1 - La vida se abre paso");
      
      const paraTexto: String []=[];
      const linea1: String = "";
      paraTexto.push(linea1);
      this.pantallasService.setTextos(paraTexto);
    }

}
