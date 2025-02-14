import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../servicios/pantallas.service';
import { AloneComponent } from "../basePantallas/alone/alone.component";

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
  
      this.pantallasService.setRutaImagen("/images/1/4.jpg");
      
      const paratexto: String []=[];
      const linea1: String = "";
      paratexto.push(linea1);
      this.pantallasService.setTextos(paratexto);
    }

}
