import { Component, inject } from '@angular/core';
import { DecisionComponent } from "../../basePantallas/decision/decision.component";
import { PantallasService } from '../../../../servicios/pantallas.service';
import { BifurcacionComponent } from "../../basePantallas/bifurcacion/bifurcacion.component";

@Component({
  selector: 'app-pantalla-23',
  standalone: true,
  imports: [BifurcacionComponent],
  templateUrl: './pantalla-23.component.html',
  styleUrl: './pantalla-23.component.css'
})
export class Pantalla23Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: Number = 23;

  ngOnInit()
  {
      if(this.pantallasService.prepararPantalla(this.pantallaActual))
      {
          this.prepararPantalla();
      }
  }

  prepararPantalla()
  {
    //SETTEAR RUTA IMAGENES
    const rutasImagenes: String[]=[];
    const rutaImagen1: String = "/images/2/19.jpg";
    rutasImagenes.push(rutaImagen1);
    const rutaImagen2: String = "/images/2/20.jpg";
    rutasImagenes.push(rutaImagen2);
    this.pantallasService.setRutasParaBifurcacion(rutasImagenes);
  }
}
