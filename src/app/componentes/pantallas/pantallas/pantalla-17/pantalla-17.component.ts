import { Component, inject } from '@angular/core';
import { DecisionComponent } from "../../basePantallas/decision/decision.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-17',
  standalone: true,
  imports: [DecisionComponent],
  templateUrl: './pantalla-17.component.html',
  styleUrl: './pantalla-17.component.css'
})
export class Pantalla17Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: Number = 17;

  ngOnInit()
  {
    if(this.pantallasService.prepararPantalla(this.pantallaActual))
    {
      this.prepararPantalla();
    }

  }
  
  prepararPantalla()
  {
  
    this.pantallasService.setRutaImagen("/images/1/16.jpg");
      
    const paraTexto: String []=[];
    const linea1: String = "Sin embargo, al mirar al suelo, ves un pequeño hueco."
    paraTexto.push(linea1);
    const linea2: String = "Podrías caber si te agachas."
    paraTexto.push(linea2);
    const linea3: String = "Aunque seguramente te manches de tierra y te hagas algunos cortes con las zarzas."
    paraTexto.push(linea3);
    this.pantallasService.setTextos(paraTexto);
  }
  

}
