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
  
      this.pantallasService.setRutaImagen("/images/abandono.png");
      
      const paratexto: String []=[];
      const linea1: String = "Decides volver atrás.";
      paratexto.push(linea1);
      const linea2: String = "Y así pasaron los días.";
      paratexto.push(linea2);
      const linea3: String = "Y Kyum no regresó.";
      paratexto.push(linea3);
      const linea4: String = "Quizás haya sido mejor así.";
      paratexto.push(linea4);
      const linea5: String = "FIN.";
      paratexto.push(linea5);
      this.pantallasService.setTextos(paratexto);
    }

}
