import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { DecisionComponent } from "../../basePantallas/decision/decision.component";

@Component({
  selector: 'app-pantalla-8',
  standalone: true,
  imports: [DecisionComponent],
  templateUrl: './pantalla-8.component.html',
  styleUrl: './pantalla-8.component.css'
})
export class Pantalla8Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: Number = 8;

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
    this.pantallasService.setRutaImagen("/images/8.png");
    
    //SETTEAR TEXTOS
    const paraTexto: String []=[];
    const linea1: String = "Ahora te encuentras frente a las montañas."
    paraTexto.push(linea1);
    const linea2: String = "Preguntándote si todo esto es una buena idea."
    paraTexto.push(linea2);

    this.pantallasService.setTextos(paraTexto);

    const textoParaDecisionComponent: String = "¿Qué harás? ¿Irás en busca de Kyum?"
    this.pantallasService.setTextoDecision(textoParaDecisionComponent);
  }

}
