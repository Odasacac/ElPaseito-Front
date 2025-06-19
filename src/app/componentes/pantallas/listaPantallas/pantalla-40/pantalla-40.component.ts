import { Component, inject } from '@angular/core';
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-40',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-40.component.html',
  styleUrl: './pantalla-40.component.css'
})
export class Pantalla40Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: number = 40;

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
    this.pantallasService.setRutaImagen("/images/"+this.pantallaActual+".png");
    
    //SETTEAR TEXTOS
    const paraTexto: String []=[];
    const linea1: String = "Tras un buen rato andando, los arbustos empiezan a agruparse formando un bosque que se extiende por tu izquierda."
    paraTexto.push(linea1);
    const linea2: String = "Parece bastante frondoso y notas cómo algo se mueve dentro de él."
    paraTexto.push(linea2);
    const linea3: String = "El camino se bifurca, invitándote a entrar."
    paraTexto.push(linea3);
    
    this.pantallasService.setTextos(paraTexto);
  }
}
