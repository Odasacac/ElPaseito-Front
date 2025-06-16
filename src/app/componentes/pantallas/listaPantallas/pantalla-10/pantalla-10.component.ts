import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { BifurcacionComponent } from "../../basePantallas/bifurcacion/bifurcacion.component";

@Component({
  selector: 'app-pantalla-10',
  standalone: true,
  imports: [BifurcacionComponent],
  templateUrl: './pantalla-10.component.html',
  styleUrl: './pantalla-10.component.css'
})
export class Pantalla10Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: Number = 10;

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

      const rutaImagen1: String = "/images/11.png";
      rutasImagenes.push(rutaImagen1);
      const linea1: String = "Ir a la zona con menos pendiente."
      textoImagenes.push(linea1);

      const rutaImagen2: String = "/images/17.png";
      rutasImagenes.push(rutaImagen2);
      const linea2: String = "Ir a la pradera."
      textoImagenes.push(linea2);

      const rutaImagen3: String = "/images/18.png";
      rutasImagenes.push(rutaImagen3);
      const linea3: String = "Ir a la zona más escarpada."
      textoImagenes.push(linea3);

      const rutaImagen4: String = "/images/12.png";
      rutasImagenes.push(rutaImagen4);
      const linea4: String = "Ir a la aldea."
      textoImagenes.push(linea4);

      this.pantallasService.setRutasParaBifurcacion(rutasImagenes);
      this.pantallasService.setTextos(textoImagenes);
    }
}
