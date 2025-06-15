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
    
        case 8:
            this.pantallasService.resetPantalla(8);
            this.irAPantalla9();
            break;







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
    

        case 8:
            this.pantallasService.resetPantalla(8);
            this.irAPantallaRendirse();
            break;







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

   irAPantalla9()
      {
        this.pantallasService.setPantalla(9);
        this.router.navigate(['/game/9']);
      }            
  








  

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
