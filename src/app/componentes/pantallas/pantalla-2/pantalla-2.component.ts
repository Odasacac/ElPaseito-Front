import { Component, inject } from '@angular/core';
import { AloneComponent } from "../basePantallas/alone/alone.component";
import { PantallasService } from '../../../servicios/pantallas.service';

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
    
    const paratexto: String []=[];
    const linea1: String = "Al darte la vuelta, ves esto."
    paratexto.push(linea1);
    this.pantallasService.setTextos(paratexto);
  }

}
