import { Component, inject } from '@angular/core';
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-14',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-14.component.html',
  styleUrl: './pantalla-14.component.css'
})
export class Pantalla14Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: number = 14;

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
    this.pantallasService.setRutaImagen("/images/14.png");
    
    //SETTEAR TEXTOS
    const paraTexto: String []=[];
    const linea1: String = "Las faldas de la montaña terminan desmoronándose en el mar."
    paraTexto.push(linea1);
    const linea2: String = "Un tupido bosque se ha formado en la zona."
    paraTexto.push(linea2);
    const linea3: String = "Cuanto más te acercas, con mayor claridad puedes oir cómo las olas golpean los acantilados."
    paraTexto.push(linea3);
    
    this.pantallasService.setTextos(paraTexto);
  }
}
