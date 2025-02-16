import { Component, inject } from '@angular/core';
import { BifurcacionComponent } from "../../basePantallas/bifurcacion/bifurcacion.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-3',
  standalone: true,
  imports: [BifurcacionComponent],
  templateUrl: './pantalla-3.component.html',
  styleUrl: './pantalla-3.component.css'
})
export class Pantalla3Component 
{
  pantallasService = inject(PantallasService);
  
  ngOnInit()
  {
    if (this.pantallasService.getPantalla3())
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
    this.pantallasService.setPantallaActiva(3);

    const rutasImagenes: String[]=[];
    const rutaImagen1: String = "/images/1/2.jpg";
    rutasImagenes.push(rutaImagen1);
    const rutaImagen2: String = "/images/1/1.jpg";
    rutasImagenes.push(rutaImagen2);
    this.pantallasService.setRutasParaBifurcacion(rutasImagenes);

    
  }

}
