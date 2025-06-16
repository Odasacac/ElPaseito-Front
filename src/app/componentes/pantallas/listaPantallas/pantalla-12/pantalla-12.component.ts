import { Component, inject } from '@angular/core';
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PantallasService } from '../../../../servicios/pantallas.service';
import { PersonajeService } from '../../../../servicios/personaje.service';

@Component({
  selector: 'app-pantalla-12',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-12.component.html',
  styleUrl: './pantalla-12.component.css'
})
export class Pantalla12Component 
{
  pantallasService = inject(PantallasService);
  personajeService = inject(PersonajeService);

  pantallaActual: Number = 12;

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
    this.pantallasService.setRutaImagen("/images/12.png");
    
    //SETTEAR TEXTOS
    const paraTexto: String []=[];
    const linea1: String = "Vuelves a la aldea y aprovechas para descansar y recuperar fuerzas."
    paraTexto.push(linea1);
    const linea2: String = "Te sientes mejor, ¿qué harás ahora?"
    paraTexto.push(linea2);
    const linea3: String = "Al norte están las montañas."
    paraTexto.push(linea3);
    const linea4: String = "Al este, los acantilados rocosos que bordean la playa."
    paraTexto.push(linea4);
    const linea5: String = "Al oeste, el camino que lleva a la aldea más cercana."
    paraTexto.push(linea5);
    const linea6: String = "Y al sur, el mar."
    paraTexto.push(linea6);
    const linea7: String = "También puedes abandonar, quizás Kyum acabe regresando."
    paraTexto.push(linea7);

    this.pantallasService.setTextos(paraTexto);


    //SETTEAR VALORES DEL PERSONAJE

    if(this.personajeService.getNivelDeTranquilidad() < 3)
    {    
   
      switch (this.personajeService.getNumeroDeImpactos())
      {
        case 0:
          this.personajeService.setTranquilidad(3);
          break;

        case 1:
          this.personajeService.setTranquilidad(2);
          break;

        case 2:
          this.personajeService.setTranquilidad(1);
          break;

        default:
          this.personajeService.setTranquilidad(5);
          break;
      }
    }
  }
}
