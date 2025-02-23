import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { AloneComponent } from "../../basePantallas/alone/alone.component";

@Component({
  selector: 'app-pantalla-11',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-11.component.html',
  styleUrl: './pantalla-11.component.css'
})
export class Pantalla11Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: Number = 11;

  ngOnInit()
  {
    if(this.pantallasService.prepararPantalla(this.pantallaActual))
    {
      this.prepararPantalla();
    }

  }
  
  prepararPantalla()
  {
    this.pantallasService.setRutaImagen("/images/1/10.jpg");
      
    const paraTexto: String []=[];
    const linea1: String = "Sigues caminando."
    paraTexto.push(linea1);
    const linea2: String = "Un árbol en el suelo llama tu atención."
    paraTexto.push(linea2);
    const linea3: String = "Está muy... ¿Roído?"
    paraTexto.push(linea3);
    const linea4: String ="Habrá sido un animal."
    paraTexto.push(linea4);
    const linea5: String = "Sin mayores pensamiento sigues adelante."
    paraTexto.push(linea5);    
    this.pantallasService.setTextos(paraTexto);
  }
}
