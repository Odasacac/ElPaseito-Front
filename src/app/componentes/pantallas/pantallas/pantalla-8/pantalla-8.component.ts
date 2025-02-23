import { Component, inject } from '@angular/core';
import { DesvioComponent } from "../../basePantallas/desvio/desvio.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-8',
  standalone: true,
  imports: [DesvioComponent],
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
    this.pantallasService.setRutaImagen("/images/1/6.jpg");
    
    const paraTexto: String []=[];
    const linea1: String = "En un momento, ves entre los árboles una pequeña cabaña hecha de hojas y ramas secas."
    paraTexto.push(linea1);
    const linea2: String = "Te preguntas si es buena idea acercarse a mirar."
    paraTexto.push(linea2);
    this.pantallasService.setTextos(paraTexto);



    const paraOpciones: String []=[];
    const opcion1: String = "Prefiero seguir el camino"
    paraOpciones.push(opcion1);
    const opcion2: String = "Me acerco a mirar"
    paraOpciones.push(opcion2);

    this.pantallasService.setOpcionesDesvio(paraOpciones);

  }

}
