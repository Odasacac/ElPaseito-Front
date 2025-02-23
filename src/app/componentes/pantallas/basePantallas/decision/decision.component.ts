import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PantallasService } from '../../../../servicios/pantallas.service';


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

  opciones = this.pantallasService.getOpcionesDesvio();
  rutaImagen = this.pantallasService.getRutaImagen();
  textos = this.pantallasService.getTextos();

  textoDesvio: String = "¿Seguirás?";
  si: String ="Sí";
  no: String ="No";

  pantallaActiva: Number = 0;

  ngOnInit()
  {
    this.pantallaActiva = this.pantallasService.getPantallaActiva()();
  }

  clickEnSi()
  {
    switch (this.pantallaActiva)
    {
        case 9:
          this.pantallasService.resetPantalla(9);
          this.irAPantalla10();
          break;

        case 17:
          this.pantallasService.resetPantalla(17);
          this.irAPantalla18();
          break;
   
        default:
          this.irARutaNoPermitida()
    }
  }

  clickEnNo()
  {
    switch (this.pantallaActiva)
    {
        case 9:
          this.pantallasService.resetPantalla(9);
          this.irAPantalla11();
          break;

        case 17:
          this.pantallasService.resetPantalla(17);
          this.irAPantallaRendirse();
          break;
   
        default:
          this.irARutaNoPermitida()
    }
  }

  irAPantalla10()
  {
    this.pantallasService.setPantalla(10);
    this.router.navigate(['/game/10']);
  }

  irAPantalla11()
  {
    this.pantallasService.setPantalla(11);
    this.router.navigate(['/game/11']);
  }

  irAPantalla18()
  {
    this.pantallasService.setPantalla(17);
    this.router.navigate(['/game/18']);
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
