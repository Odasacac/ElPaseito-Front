import { Component, inject } from '@angular/core';
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-5',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-5.component.html',
  styleUrl: './pantalla-5.component.css'
})
export class Pantalla5Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: Number = 5;

  ngOnInit()
  {
    if(this.pantallasService.prepararPantalla(this.pantallaActual))
    {
      this.prepararPantalla();
    }

  }
  prepararPantalla()
  {

    this.pantallasService.setRutaImagen("/images/1/3.jpg");
    
    const paraTexto: String []=[];
    const linea1: String = "Dejas la ciudad a tus espaldas, sintiendo haber tomado una buena decisión."
    paraTexto.push(linea1);
    const linea2: String = "Tras una buena subida descubres un pequeño camino iluminado por el sol."
    paraTexto.push(linea2);
    this.pantallasService.setTextos(paraTexto);
  }
}
