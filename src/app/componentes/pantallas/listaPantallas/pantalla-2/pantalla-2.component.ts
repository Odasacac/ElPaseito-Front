import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { AloneComponent } from "../../basePantallas/alone/alone.component";

@Component({
  selector: 'app-pantalla-2',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-2.component.html',
  styleUrl: './pantalla-2.component.css'
})
export class Pantalla2Component 
{
  pantallasService = inject(PantallasService);
  
  pantallaActual: number = 2;
  
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
    this.pantallasService.setRutaImagen("/images/"+this.pantallaActual+".png");
      
    //SETTEAR TEXTOS
    const paraTexto: String []=[];
    const linea1: String = "Miras por la ventana intentando recuperar la calma."
    paraTexto.push(linea1);
    const linea2: String = "Qué extraño, ha sido una sensación tan real..."
    paraTexto.push(linea2);
      
    this.pantallasService.setTextos(paraTexto);
  }


}
