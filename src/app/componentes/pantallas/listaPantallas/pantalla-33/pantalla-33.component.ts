import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PersonajeService } from '../../../../servicios/personaje.service';

@Component({
  selector: 'app-pantalla-33',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-33.component.html',
  styleUrl: './pantalla-33.component.css'
})
export class Pantalla33Component 
{
  pantallasService = inject(PantallasService);
  personajeService = inject(PersonajeService);
      
  pantallaActual: number = 33;
  estadoEstatua: number = 0;
    
  ngOnInit()
  {
    this.estadoEstatua = this.personajeService.getEstadoEstatuillaBosque();
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
    if(this.estadoEstatua === 0)
    {
      const linea1: String = "Desde el puente tienes una visión inesperada."
      paraTexto.push(linea1);
      const linea2: String = "Por la otra parte, el río está plagado de peces y de unas extrañas estatuas con forma humana."
      paraTexto.push(linea2);
      const linea3: String = "Te parece ver algo en la boca de una de las estatuas así que bajas a la orilla del río a verla más de cerca."
      paraTexto.push(linea3);
    }
    else
    {
      const linea1: String = "Te sigue llamando la atención las curiosas estatuas del río."
      paraTexto.push(linea1);
      const linea2: String = "Y te resulta curioso como todos los peces nadan en la misma dirección."
      paraTexto.push(linea2);
      const linea3: String = "Poco más tienes que hacer por aquí."
      paraTexto.push(linea3);
      const linea4: String = "Así que sigues el camino."
      paraTexto.push(linea4);
    }

  
    this.pantallasService.setTextos(paraTexto);
  }
}
