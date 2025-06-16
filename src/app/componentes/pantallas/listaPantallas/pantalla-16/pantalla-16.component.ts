import { Component, inject } from '@angular/core';
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PantallasService } from '../../../../servicios/pantallas.service';
import { PersonajeService } from '../../../../servicios/personaje.service';

@Component({
  selector: 'app-pantalla-16',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-16.component.html',
  styleUrl: './pantalla-16.component.css'
})
export class Pantalla16Component 
{
  pantallasService = inject(PantallasService);
  personajeService = inject(PersonajeService);

  estadoBotellaPlaya: number =0;
  
  pantallaActual: number = 16;
  
  ngOnInit()
  {
      if(this.pantallasService.prepararPantalla(this.pantallaActual))
      {
        this.prepararPantalla();
      }
  }
  
  prepararPantalla()
  {

    //SETTEAR ESTADO DE LA BOTELLA
    this.estadoBotellaPlaya = this.personajeService.getEstadoBotellaPlaya();

    //SETTEAR RUTA IMAGEN
    this.pantallasService.setRutaImagen("/images/16.png");
      
    //SETTEAR TEXTOS
    const paraTexto: String []=[];
    const linea1: String = "Llegas al mar, una suave brisa te reconforta y tranquiliza."
    paraTexto.push(linea1);
    const linea2: String = "Te quedas pensativo durante un buen rato mirando el horizonte...";
    paraTexto.push(linea2);

    if(this.estadoBotellaPlaya === 0)
    {
     
      const linea3: String = "Algo brillate llama tu atención en la orilla.";
      paraTexto.push(linea3);
      const linea4: String = "Es una botella vacía, desgastada por los rayos del sol y la sal.";
      paraTexto.push(linea4);
      const linea5: String = "La guardas, quizás resulte útil más adelante.";
      paraTexto.push(linea5);
    }

    const linea6: String = "Paseas un poco más y decides volver a la aldea.";
    paraTexto.push(linea6);
      
    this.pantallasService.setTextos(paraTexto);


    //SETTEAR VALORES DEL PERSONAJE

    if(this.personajeService.getNivelDeTranquilidad() < 2)
    {
      this.personajeService.aumentarTranquilidadEn(2);
    }
   
    
    if(this.estadoBotellaPlaya === 0)
    {
      this.personajeService.setEstadoBotellaPlaya(1); //1 Cogemos la botella
    }
  }

}
