import { Component, inject } from '@angular/core';
import { BifurcacionComponent } from "../../basePantallas/bifurcacion/bifurcacion.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-13',
  standalone: true,
  imports: [BifurcacionComponent],
  templateUrl: './pantalla-13.component.html',
  styleUrl: './pantalla-13.component.css'
})
export class Pantalla13Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: Number = 13;

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

      const rutaImagen1: String = "/images/8.png";
      rutasImagenes.push(rutaImagen1);
      const linea1: String = "Ir a las montañas."
      textoImagenes.push(linea1);

      const rutaImagen2: String = "/images/14.png";
      rutasImagenes.push(rutaImagen2);
      const linea2: String = "Ir a los acantilados."
      textoImagenes.push(linea2);

      const rutaImagen3: String = "/images/15.png";
      rutasImagenes.push(rutaImagen3);
      const linea3: String = "Ir al camino."
      textoImagenes.push(linea3);

      const rutaImagen4: String = "/images/16.png";
      rutasImagenes.push(rutaImagen4);
      const linea4: String = "Ir al mar."
      textoImagenes.push(linea4);

      const rutaImagen5: String = "/images/abandono.png";
      rutasImagenes.push(rutaImagen5);
      const linea5: String = "Abandonar."
      textoImagenes.push(linea5);

      this.pantallasService.setRutasParaBifurcacion(rutasImagenes);
      this.pantallasService.setTextos(textoImagenes);
    }
}
