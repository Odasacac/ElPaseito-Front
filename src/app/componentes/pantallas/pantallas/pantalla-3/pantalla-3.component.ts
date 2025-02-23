import { Component, inject } from '@angular/core';
import { BifurcacionComponent } from "../../basePantallas/bifurcacion/bifurcacion.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-3',
  standalone: true,
  imports: [BifurcacionComponent],
  templateUrl: './pantalla-3.component.html',
  styleUrl: './pantalla-3.component.css'
})
export class Pantalla3Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: Number = 3;

  ngOnInit()
  {
    if(this.pantallasService.prepararPantalla(this.pantallaActual))
    {
      this.prepararPantalla();
    }

  }

  prepararPantalla()
  {
    const rutasImagenes: String[]=[];
    const rutaImagen1: String = "/images/1/2.jpg";
    rutasImagenes.push(rutaImagen1);
    const rutaImagen2: String = "/images/1/1.jpg";
    rutasImagenes.push(rutaImagen2);
    this.pantallasService.setRutasParaBifurcacion(rutasImagenes);
  }

}
