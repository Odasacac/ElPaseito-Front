import { Component, inject } from '@angular/core';
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PantallasService } from '../../../../servicios/pantallas.service';
import { PersonajeService } from '../../../../servicios/personaje.service';

@Component({
  selector: 'app-pantalla-44',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-44.component.html',
  styleUrl: './pantalla-44.component.css'
})
export class Pantalla44Component 
{
  pantallasService = inject(PantallasService);
  personajeService = inject(PersonajeService);
      
  pantallaActual: number = 44;
    
  ngOnInit()
  {
    if(this.pantallasService.prepararPantalla(this.pantallaActual))
    {
      this.prepararPantalla();
    }
  }
    
  prepararPantalla()
  {
 
    this.personajeService.setEstadoEstatuillaBosque(1); //Cogemos la estatuilla
    this.personajeService.aumentarExploracion(1);
    this.personajeService.aumentarMiedoEn(1);


    //SETTEAR RUTA IMAGEN
    this.pantallasService.setRutaImagen("/images/"+this.pantallaActual+".png");
        
    //SETTEAR TEXTOS
    const paraTexto: String []=[];
    const linea1: String = "Estando más cerca, la estatua te da un poco de impresión."
    paraTexto.push(linea1);
    const linea2: String = "Ves que en el interior de su boca hay otra estatuilla igual, pero más pequeña."
    paraTexto.push(linea2);
    const linea3: String = "La coges y sigues el sendero."
    paraTexto.push(linea3);
  
    this.pantallasService.setTextos(paraTexto);
  }
}
