import { Component, inject } from '@angular/core';
import { AloneComponent } from '../../basePantallas/alone/alone.component';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { CapituloComponent } from "../../basePantallas/capitulo/capitulo.component";


@Component({
  selector: 'app-pantalla-4',
  standalone: true,
  imports: [CapituloComponent],
  templateUrl: './pantalla-4.component.html',
  styleUrl: './pantalla-4.component.css'
})
export class Pantalla4Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: Number = 4;

  ngOnInit()
  {
    if(this.pantallasService.prepararPantalla(this.pantallaActual))
    {
      this.prepararPantalla();
    }

  }

  prepararPantalla()
  {
    this.pantallasService.setNumeroCapitulo(1);
    this.pantallasService.setNombreCapitulo("La vida se abre paso");
  }

}
