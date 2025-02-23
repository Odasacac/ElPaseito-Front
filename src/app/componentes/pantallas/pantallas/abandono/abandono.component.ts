import { Component, inject } from "@angular/core";
import { AloneComponent } from "../../basePantallas/alone/alone.component";
import { PantallasService } from "../../../../servicios/pantallas.service";

@Component({
  selector: 'app-abandono',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './abandono.component.html',
  styleUrl: './abandono.component.css'
})
export class AbandonoComponent 
{
  pantallasService = inject(PantallasService);
  
    ngOnInit()
    {
      if (this.pantallasService.getPantallaAbandono())
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
      this.pantallasService.setPantallaActiva(99);
  
      this.pantallasService.setRutaImagen("/images/1/0.jpg");
      
      const paratexto: String []=[];
      const linea1: String = "Decides volver atrás.";
      paratexto.push(linea1);
      const linea2: String = "Y así la vida se pasa.";
      paratexto.push(linea2);
      const linea3: String = "Sin aventurarnos en lo desconocido.";
      paratexto.push(linea3);
      this.pantallasService.setTextos(paratexto);
    }

}
