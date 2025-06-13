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
        /*
        Ir poniendo aquí los:

          case X:
            this.pantallasService.resetPantalla(X);
            this.irAPantallaB();
            break;
        */
       
        //-----------------------
    








        //----------------------
   
        default:
          this.irARutaNoPermitida()
    }
  }

  clickEnNo()
  {
    switch (this.pantallaActiva)
    {
               /*
        Ir poniendo aquí los:

          case X:
            this.pantallasService.resetPantalla(X);
            this.irAPantallaB();
            break;
        */
       
        //-----------------------
    








        //----------------------
   
        default:
          this.irARutaNoPermitida()
    }
  }

  
  /*
    Ir poniendo aquí los:

      irAPantallaB()
      {
        this.pantallasService.setPantalla(B);
        this.router.navigate(['/game/B']);
      }            
  
    */

  //-----------------------










  

  //-----------------------


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
