import { Component, inject } from '@angular/core';
import { AloneComponent } from '../../basePantallas/alone/alone.component';
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-2',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-2.component.html',
  styleUrl: './pantalla-2.component.css'
})
export class Pantalla2Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: Number = 2;

  ngOnInit()
  {
    if(this.pantallasService.prepararPantalla(this.pantallaActual))
    {
      this.prepararPantalla();
    }

  }
  prepararPantalla()
  {
    this.pantallasService.setRutaImagen("/images/1/2.jpg");
    
    const paraTexto: String []=[];
    const linea1: String = "Al girarte, ves la ciudad."
    paraTexto.push(linea1);
    const linea2: String = "Tu objetivo era y sigue siendo ver un atardecer bonito desde un lugar cómodo."
    paraTexto.push(linea2);
    const linea3: String = "No es tarde, pero tampoco tienes todo el tiempo del mundo."
    paraTexto.push(linea3);
    const linea4: String = "Te preguntas si es mejor volver."
    paraTexto.push(linea4);
    this.pantallasService.setTextos(paraTexto);
  }

}
