import { Component, inject } from '@angular/core';
import { BifurcacionComponent } from "../../basePantallas/bifurcacion/bifurcacion.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-25',
  standalone: true,
  imports: [BifurcacionComponent],
  templateUrl: './pantalla-25.component.html',
  styleUrl: './pantalla-25.component.css'
})
export class Pantalla25Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: number = 25;

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

      const rutaImagen1: String = "/images/26.png";
      rutasImagenes.push(rutaImagen1);
      const linea1: String = "Seguir por el sendero."
      textoImagenes.push(linea1);

      const rutaImagen2: String = "/images/29.png";
      rutasImagenes.push(rutaImagen2);
      const linea2: String = "Adentrarte en el bosque."
      textoImagenes.push(linea2);

      this.pantallasService.setRutasParaBifurcacion(rutasImagenes);
      this.pantallasService.setTextos(textoImagenes);
    }
}
