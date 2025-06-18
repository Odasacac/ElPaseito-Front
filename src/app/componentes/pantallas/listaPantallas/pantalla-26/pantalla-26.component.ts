import { Component, inject } from '@angular/core';
import { AbandonoComponent } from "../abandono/abandono.component";
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-26',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-26.component.html',
  styleUrl: './pantalla-26.component.css'
})
export class Pantalla26Component 
{
    pantallasService = inject(PantallasService);
  
    pantallaActual: number = 26;
  
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
      const linea1: String = "Sigues el sendero manteniendo el bosque a tu izquierda."
      paraTexto.push(linea1);
      const linea2: String = "Notas como la vegetación va aumentando considerablemente."
      paraTexto.push(linea2);
      const linea3: String = "El camino se bifurca de nuevo, ofreciéndote otra oportunidad para entrar."
      paraTexto.push(linea3);
      const linea4: String = "Estás cerca del extremo oeste de las montañas, no debe quedar mucho."
      paraTexto.push(linea4);

      this.pantallasService.setTextos(paraTexto);
    }

}
