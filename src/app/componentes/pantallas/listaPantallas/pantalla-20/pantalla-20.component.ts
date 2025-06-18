import { Component, inject } from '@angular/core';
import { AbandonoComponent } from "../abandono/abandono.component";
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PantallasService } from '../../../../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla-20',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-20.component.html',
  styleUrl: './pantalla-20.component.css'
})
export class Pantalla20Component 
{
  pantallasService = inject(PantallasService);  
  pantallaActual: number = 20;
    
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
    const linea1: String = "Estás en una amplia llanura."
    paraTexto.push(linea1);
    const linea2:String = "El sol golpea con fuerza toda la extensión y sólo ves algún buitre merodeando en las alturas";
    paraTexto.push(linea2);
    const linea3:String = "Puedes arriesgarte a cruzarla campo a través, aunque es posible que puedas ser visto.";
    paraTexto.push(linea3);
    const linea4:String = "Puedes ir por un camino que hay en el lateral derecho que parece tener algo más de vegetación.";
    paraTexto.push(linea4);
    const linea5:String = "O puedes volver a tu aldea por el desfiladero.";
    paraTexto.push(linea5);

    this.pantallasService.setTextos(paraTexto);
  }

}
