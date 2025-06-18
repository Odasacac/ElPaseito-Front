import { Component, inject } from '@angular/core';
import { BifurcacionComponent } from "../../basePantallas/bifurcacion/bifurcacion.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-31',
  standalone: true,
  imports: [BifurcacionComponent],
  templateUrl: './pantalla-31.component.html',
  styleUrl: './pantalla-31.component.css'
})
export class Pantalla31Component 
{
    pantallasService = inject(PantallasService);
  
    pantallaActual: number = 31;
  
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
  
        const rutaImagen1: String = "/images/35.png";
        rutasImagenes.push(rutaImagen1);
        const linea1: String = "Ir por el camino siniestro."
        textoImagenes.push(linea1);
  
        const rutaImagen2: String = "/images/34.png";
        rutasImagenes.push(rutaImagen2);
        const linea2: String = "Seguir recto, ir a la aldea."
        textoImagenes.push(linea2);
  
        const rutaImagen3: String = "/images/32.png";
        rutasImagenes.push(rutaImagen3);
        const linea3: String = "Ir hacia el puente."
        textoImagenes.push(linea3);

        this.pantallasService.setRutasParaBifurcacion(rutasImagenes);
        this.pantallasService.setTextos(textoImagenes);
      }

}
