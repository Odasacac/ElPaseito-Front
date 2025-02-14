import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decision',
  standalone: true,
  imports: [],
  templateUrl: './decision.component.html',
  styleUrl: './decision.component.css'
})
export class DecisionComponent 
{
  router = inject(Router);

  pantallasService = inject(PantallasService);
  rutasImagenes = this.pantallasService.getRutasParaDecision();

  textoDecision: String = "¿Qué decides?";

  clickEn(indice: Number)
  {
    let pantallaActiva = this.pantallasService.getPantallaActiva();
    let valorPantallaActive = pantallaActiva();

    switch (valorPantallaActive)
    {
        case 3:
          this.seleccionEnPantalla3(indice);
          break;
   
        default:
          this.irARutaNoPermitida()
    }
  }


  seleccionEnPantalla3(imagen: Number)
  {
    this.pantallasService.setPantalla3(false);

    switch (imagen)
    {
      case 0:
        this.irAPantallaRendirse();
        break;
      case 1:
        this.irAPantalla4();
        break;
      default:
        this.irARutaNoPermitida();
        break;
    }
  }

  irAPantalla4()
  {
    this.pantallasService.setPantalla4(true);
    this.router.navigate(['/game/4']);
  }

  irARutaNoPermitida()
  {
    this.router.navigate(['nopermitida']);
  }

  irAPantallaRendirse()
  {
 
    this.pantallasService.setPantallaAbandono(true);
    this.router.navigate(['/game/abandono']);
  }
}
