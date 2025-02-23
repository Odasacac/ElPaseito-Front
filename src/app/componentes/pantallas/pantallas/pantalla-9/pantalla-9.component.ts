import { Component, inject } from '@angular/core';
import { DecisionComponent } from "../../basePantallas/decision/decision.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-9',
  standalone: true,
  imports: [DecisionComponent],
  templateUrl: './pantalla-9.component.html',
  styleUrl: './pantalla-9.component.css'
})
export class Pantalla9Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: Number = 9;

  ngOnInit()
  {
    if(this.pantallasService.prepararPantalla(this.pantallaActual))
    {
      this.prepararPantalla();
    }

  }

  prepararPantalla()
  {
    this.pantallasService.setRutaImagen("/images/1/8.jpg");
    
    const paraTexto: String []=[];
    const linea1: String = "Es una cabaña hecha de ramas secas, bastante envuelta de matorrales."
    paraTexto.push(linea1);
    const linea2: String = "No hay nada reseñable, excepto lo que parece un camino al fondo."
    paraTexto.push(linea2);
    this.pantallasService.setTextos(paraTexto);


  }

}
