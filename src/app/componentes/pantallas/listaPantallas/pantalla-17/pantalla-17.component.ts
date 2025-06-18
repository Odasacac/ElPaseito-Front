import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-17',
  standalone: true,
  imports: [],
  templateUrl: './pantalla-17.component.html',
  styleUrl: './pantalla-17.component.css'
})
export class Pantalla17Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: number = 17;

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
    this.pantallasService.setRutaImagen("/images/17.png");
    
    //SETTEAR TEXTOS
    const paraTexto: String []=[];
    const linea1: String = "Una pradera extensa te separa del acceso central a las montañas."
    paraTexto.push(linea1);
    const linea2: String = "Sientes como el viento baja rápido y frío de las cumbres."
    paraTexto.push(linea2);
    const linea3: String = "Un pensamiento peregrino se despide de tu mente con la misma fugacidad con la que entró."
    paraTexto.push(linea3);
    
    this.pantallasService.setTextos(paraTexto);
  }
}
