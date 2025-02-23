import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { AloneComponent } from "../../basePantallas/alone/alone.component";

@Component({
  selector: 'app-pantalla-16',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-16.component.html',
  styleUrl: './pantalla-16.component.css'
})
export class Pantalla16Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: Number = 16;

  ngOnInit()
  {
    if(this.pantallasService.prepararPantalla(this.pantallaActual))
    {
      this.prepararPantalla();
    }
  }
  
  prepararPantalla()
  {
    this.pantallasService.setVisible(true);
    this.pantallasService.setPantallaActiva(16);
  
    this.pantallasService.setRutaImagen("/images/1/15.jpg");
      
    const paraTexto: String []=[];
    const linea1: String = "Pero nada, incluso bordeando es imposible."
    paraTexto.push(linea1);
    const linea2: String = "Hay mucha vegetación y ningún camino marcado."
    paraTexto.push(linea2);
    this.pantallasService.setTextos(paraTexto);
  }
}
