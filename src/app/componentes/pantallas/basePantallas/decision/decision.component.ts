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
          this.pantallasService.setPantalla9(false);
          this.irAPantalla10();
          break;

        case 17:
          this.pantallasService.setPantalla17(false);
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
          this.pantallasService.setPantalla9(false);
          this.irAPantalla11();
          break;

        case 17:
          this.pantallasService.setPantalla17(false);
          this.irAPantallaRendirse();
          break;
   
        default:
          this.irARutaNoPermitida()
    }
  }

  irAPantalla10()
  {
    this.pantallasService.setPantalla10(true);
    this.router.navigate(['/game/10']);
  }

  irAPantalla11()
  {
    this.pantallasService.setPantalla11(true);
    this.router.navigate(['/game/11']);
  }

  irAPantalla18()
  {
    this.pantallasService.setPantalla17(true);
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
