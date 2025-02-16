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

  ngOnInit()
  {
    if (this.pantallasService.getPantalla2())
    {
      this.prepararPantalla();
    }
    else
    {
      this.pantallasService.setVisible(false);
    }

  }

  prepararPantalla()
  {
    this.pantallasService.setVisible(true);
    this.pantallasService.setPantallaActiva(2);

    this.pantallasService.setRutaImagen("/images/1/2.jpg");
    
    const paraTexto: String []=[];
    const linea1: String = "Al darte la vuelta, ves esto."
    paraTexto.push(linea1);
    const linea2: String = "La ciudad."
    paraTexto.push(linea2);
    const linea3: String = "Te preguntas si es mejor volver."
    paraTexto.push(linea3);
    this.pantallasService.setTextos(paraTexto);
  }

}
