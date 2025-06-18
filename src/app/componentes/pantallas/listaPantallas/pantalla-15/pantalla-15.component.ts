import { Component, inject } from '@angular/core';
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PantallasService } from '../../../../servicios/pantallas.service';
import { EstadoJuegoService } from '../../../../servicios/estado-juego.service';

@Component({
  selector: 'app-pantalla-15',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-15.component.html',
  styleUrl: './pantalla-15.component.css'
})
export class Pantalla15Component 
{
    pantallasService = inject(PantallasService);  
    pantallaActual: number = 15;
  
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
      this.pantallasService.setRutaImagen("/images/15.png");
          
      //SETTEAR TEXTOS
      const paraTexto: String []=[];
      const linea1: String = "Decides tomar el camino en dirección a la otra aldea."
      paraTexto.push(linea1);
      const linea2:String = "Es una zona muy despejada y consigues oir animales en la lejanía.";
      paraTexto.push(linea2);
      const linea3:String = "A tu espalda queda tu aldea y aún puedes oler el salado del mar.";
      paraTexto.push(linea3);
      const linea4:String = "Parece que el camino se estrecha a lo lejos.";
      paraTexto.push(linea4);
      this.pantallasService.setTextos(paraTexto);
    }

}
