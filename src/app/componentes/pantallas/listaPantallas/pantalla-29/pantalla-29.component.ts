import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { AloneComponent } from "../../basePantallas/alone/alone.component";

@Component({
  selector: 'app-pantalla-29',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-29.component.html',
  styleUrl: './pantalla-29.component.css'
})
export class Pantalla29Component 
{
  pantallasService = inject(PantallasService);
    
  pantallaActual: number = 29;
    
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
    const linea1: String = "Te adentras en el bosque y andas durante un buen rato."
    paraTexto.push(linea1);
    const linea2: String = "Oyes los pájaros y algún que otro jabalí, pero nada más."
    paraTexto.push(linea2);
    const linea3: String = "Finalmente llegas a un claro, donde a la derecha, el camino se vuelve algo más siniestro."
    paraTexto.push(linea3);
    const linea4: String = "Si sigues recto, parece que el bosque llega a su fin y ves tu aldea a lo lejos."
    paraTexto.push(linea4);
    const linea5: String = "Y hacia tu izquierda oyes el discurrir del agua y ves un puente."
    paraTexto.push(linea5);
  
    this.pantallasService.setTextos(paraTexto);
  }
  

}
