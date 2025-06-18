import { Component, inject } from '@angular/core';
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-28',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-28.component.html',
  styleUrl: './pantalla-28.component.css'
})
export class Pantalla28Component 
{

  pantallasService = inject(PantallasService);
  
  pantallaActual: number = 28;
  
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
    const linea1: String = "Poco a poco vas dejando el bosque atrás."
    paraTexto.push(linea1);
    const linea2: String = "Y acabas encontrándote a las faldas de la montaña."
    paraTexto.push(linea2);
    const linea3: String = "Ante ti, una larga, pero suave subida."
    paraTexto.push(linea3);
    const linea4: String = "¿Iniciarás el ascenso o prefieres deshacer el camino y volver a la señal de madera?"
    paraTexto.push(linea4);
      
    this.pantallasService.setTextos(paraTexto);
  }
}
