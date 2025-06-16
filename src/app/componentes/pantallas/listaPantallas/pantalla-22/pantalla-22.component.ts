import { Component, inject } from '@angular/core';
import { BifurcacionComponent } from "../../basePantallas/bifurcacion/bifurcacion.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-22',
  standalone: true,
  imports: [BifurcacionComponent],
  templateUrl: './pantalla-22.component.html',
  styleUrl: './pantalla-22.component.css'
})
export class Pantalla22Component 
{
 pantallasService = inject(PantallasService);

  pantallaActual: number = 22;

    ngOnInit()
    {
      if(this.pantallasService.prepararPantalla(this.pantallaActual))
      {
          this.prepararPantalla();
      }
    }

    prepararPantalla()
    {
      //SETTEAR RUTA IMAGENES CON SU TEXTO

      const rutasImagenes: String[]=[];
      const textoImagenes: String []=[];

      const rutaImagen1: String = "/images/23.png";
      rutasImagenes.push(rutaImagen1);
      const linea1: String = "Ir campo a través."
      textoImagenes.push(linea1);

      const rutaImagen2: String = "/images/24.png";
      rutasImagenes.push(rutaImagen2);
      const linea2: String = "Ir por el camino del lateral."
      textoImagenes.push(linea2);

      const rutaImagen4: String = "/images/21.png";
      rutasImagenes.push(rutaImagen4);
      const linea4: String = "Volver por el desfiladero."
      textoImagenes.push(linea4);

      this.pantallasService.setRutasParaBifurcacion(rutasImagenes);
      this.pantallasService.setTextos(textoImagenes);
    }
}
