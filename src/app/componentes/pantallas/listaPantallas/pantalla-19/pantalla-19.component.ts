import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { EstadoJuegoService } from '../../../../servicios/estado-juego.service';
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PersonajeService } from '../../../../servicios/personaje.service';

@Component({
  selector: 'app-pantalla-19',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-19.component.html',
  styleUrl: './pantalla-19.component.css'
})
export class Pantalla19Component 
{
  pantallasService = inject(PantallasService);
  estadoDelJuegoService = inject (EstadoJuegoService);
  personajeService = inject (PersonajeService);

  caminoDespejado: boolean = false;
    
  pantallaActual: number = 19;
    
  ngOnInit()
  {
    if(this.pantallasService.prepararPantalla(this.pantallaActual))
    {
      this.prepararPantalla();
    }

  }

  prepararPantalla()
  {
      //SETTEAR ESTADO DEL CAMINO
      this.caminoDespejado = this.estadoDelJuegoService.getCaminoDespejado();

      this.caminoDespejado = true;
      
      const paraTexto: String []=[];

      if (this.caminoDespejado)
      {
        //SETTEAR RUTA IMAGEN
        this.pantallasService.setRutaImagen("/images/"+this.pantallaActual+"t.png");

        
        //SETTEAR TEXTOS
        const linea1: String = "El camino acaba convirtiéndose en un desfiladero, pero todo parece en calma."
        paraTexto.push(linea1);
        const linea2: String = "Hay huellas en la tierra, de personas, un carruaje y un caballo."
        paraTexto.push(linea2);
        const linea3: String = "Tras andar un buen rato llegas a una zona más amplia."
        paraTexto.push(linea3);
      }
      else
      {
        //SETTEAR RUTA IMAGEN
        this.pantallasService.setRutaImagen("/images/"+this.pantallaActual+"f.png");

        //SETTEAR TEXTOS
        const linea1: String = "El camino acaba convirtiéndose en un desfiladero."
        paraTexto.push(linea1);
        const linea2: String = "Ves a unas figuras encapuchadas y un carruaje."
        paraTexto.push(linea2);
        const linea3: String = "Parecen peligrosos, así que decides darte la vuelta y volver a la aldea."
        paraTexto.push(linea3);
        const linea4: String = "Es más, ¿qué haces aquí? ¿No deberías estar buscando a Kyum?"
        paraTexto.push(linea4);

        this.personajeService.aumentarExploracion(1);
        this.personajeService.aumentarMiedoEn(1);
        this.estadoDelJuegoService.setBandidosVistosEnElDesfiladero(true);
      }
      
      this.pantallasService.setTextos(paraTexto);
  }
  

}
