import { Component, inject } from '@angular/core';
import { BifurcacionComponent } from "../../basePantallas/bifurcacion/bifurcacion.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-27',
  standalone: true,
  imports: [BifurcacionComponent],
  templateUrl: './pantalla-27.component.html',
  styleUrl: './pantalla-27.component.css'
})
export class Pantalla27Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: number = 27;

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

      const rutaImagen1: String = "/images/28.png";
      rutasImagenes.push(rutaImagen1);
      const linea1: String = "Seguir el sendero."
      textoImagenes.push(linea1);

      const rutaImagen2: String = "/images/30.png";
      rutasImagenes.push(rutaImagen2);
      const linea2: String = "Adentrarte en el bosque."
      textoImagenes.push(linea2);

      this.pantallasService.setRutasParaBifurcacion(rutasImagenes);
      this.pantallasService.setTextos(textoImagenes);
    }
}
