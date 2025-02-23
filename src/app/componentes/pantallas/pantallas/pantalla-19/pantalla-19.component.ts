import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { CapituloComponent } from "../../basePantallas/capitulo/capitulo.component";

@Component({
  selector: 'app-pantalla-19',
  standalone: true,
  imports: [CapituloComponent],
  templateUrl: './pantalla-19.component.html',
  styleUrl: './pantalla-19.component.css'
})
export class Pantalla19Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: Number = 19;

  ngOnInit()
  {
    if(this.pantallasService.prepararPantalla(this.pantallaActual))
    {
      this.prepararPantalla();
    }
  }

  prepararPantalla()
  {
      this.pantallasService.setNumeroCapitulo(2);
      this.pantallasService.setNombreCapitulo("Rodeo, sol y asfalto");
  }
}
