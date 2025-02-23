import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { AloneComponent } from "../../basePantallas/alone/alone.component";

@Component({
  selector: 'app-pantalla-20',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-20.component.html',
  styleUrl: './pantalla-20.component.css'
})
export class Pantalla20Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: Number = 20;

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
    this.pantallasService.setRutaImagen("/images/2/18.jpg");

    //SETTEAR TEXTOS
    const paraTexto: String []=[];
    const linea1: String = "He perdido las gafas."
    paraTexto.push(linea1);
    this.pantallasService.setTextos(paraTexto);
  }
}
