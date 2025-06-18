import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { AloneComponent } from "../../basePantallas/alone/alone.component";

@Component({
  selector: 'app-pantalla-3',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-3.component.html',
  styleUrl: './pantalla-3.component.css'
})
export class Pantalla3Component 
{
  pantallasService = inject(PantallasService);
    
  pantallaActual: number = 3;
    
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
    const linea1: String = "A la mañana siguiente vas a su casa y no lo encuentras allí."
    paraTexto.push(linea1);
    const linea2: String = "Los vecinos dicen que llevan días sin verle y ningún familiar que conozcas ha sabido de él desde hace tiempo."
    paraTexto.push(linea2);
    const linea3: String = "Un frío gélido impregna tu sangre y algo te late en el pecho."
    paraTexto.push(linea3);
        
    this.pantallasService.setTextos(paraTexto);
  }

}
