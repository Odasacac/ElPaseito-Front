import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { AloneComponent } from "../../basePantallas/alone/alone.component";

@Component({
  selector: 'app-pantalla-1',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-1.component.html',
  styleUrl: './pantalla-1.component.css'
})
export class Pantalla1Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: number = 1;

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
    this.pantallasService.setRutaImagen("/images/1.png");
    
    //SETTEAR TEXTOS
    const paraTexto: String []=[];
    const linea1: String = "Te despiertas con agitación en mitad de la noche."
    paraTexto.push(linea1);
    const linea2: String = "Has tenido un sueño donde algo terrible le ocurría a Kyum."
    paraTexto.push(linea2);
    
    this.pantallasService.setTextos(paraTexto);
  }

}
