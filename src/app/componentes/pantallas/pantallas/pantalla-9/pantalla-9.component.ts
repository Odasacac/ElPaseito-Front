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

  ngOnInit()
  {
    if (this.pantallasService.getPantalla9())
    {
      this.prepararPantalla();
    }
    else
    {
      this.pantallasService.setVisible(false);
    }

  }

  prepararPantalla()
  {
    this.pantallasService.setVisible(true);
    this.pantallasService.setPantallaActiva(9);

    this.pantallasService.setRutaImagen("/images/1/8.jpg");
    
    const paraTexto: String []=[];
    const linea1: String = "Te acercas a mirar."
    paraTexto.push(linea1);
    const linea2: String = "Es una cabaña hecha de ramas secas, bastante envuelta de matorrales."
    paraTexto.push(linea2);
    const linea3: String = "No hay nada reseñable, excepto lo que parece un camino al fondo."
    paraTexto.push(linea3);
    this.pantallasService.setTextos(paraTexto);


  }

}
