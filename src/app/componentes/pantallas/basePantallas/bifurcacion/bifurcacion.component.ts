import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bifurcacion',
  standalone: true,
  imports: [],
  templateUrl: './bifurcacion.component.html',
  styleUrl: './bifurcacion.component.css'
})
export class BifurcacionComponent 
{
  router = inject(Router);
  pantallasService = inject(PantallasService);
  
  rutasImagenes = this.pantallasService.getRutasParaBifurcacion();
  textoImagenes = this.pantallasService.getTextos();

  textoBifurcacion: String = "¿Qué harás?";

  clickEn(indice: Number)
  {
    let pantallaActiva = this.pantallasService.getPantallaActiva()();
    

    switch (pantallaActiva)
    {

      /*
        Ir poniendo aquí los:

          case X:
              this.seleccionEnPantallaX(indice);
              break;
        */
       
        //-----------------------


      case 10:
        this.seleccionEnPantalla10(indice);
        break;

      case 13:
        this.seleccionEnPantalla13(indice);
        break;

      case 22:
        this.seleccionEnPantalla22(indice);
        break;

      case 25:
        this.seleccionEnPantalla25(indice);
        break;

      case 27:
        this.seleccionEnPantalla27(indice);
        break;

      case 31:
        this.seleccionEnPantalla31(indice);
        break;




        //-----------------------
   
        default:
          this.irARutaNoPermitida()
    }
  }


  /*
    Ir aqui poniendo los:

      seleccionEnPantallaA(imagen: Number)
      {
        this.pantallasService.resetPantalla(A);

        switch (imagen)
        {
            case 0:
            this.irAPantallaRendirse();
            break;

            case 1:
            this.irAPantallaB();
            break; 
                    
            default:
              this.irARutaNoPermitida(); 
            break;
          }
      }
  */
  //-----------------------


  seleccionEnPantalla10(imagen: Number)
  {
    this.pantallasService.resetPantalla(10);

    switch (imagen)
    {
      case 0:
        this.irAPantalla(11);
        break;

      case 1:
        this.irAPantalla(17);
        break; 
        
      case 2:
        this.irAPantalla(18);
        break;

      case 3:
        this.irAPantalla(12);
        break;
                    
      default:
        this.irARutaNoPermitida(); 
        break;
    }
  }


  seleccionEnPantalla13(imagen: Number)
  {
    this.pantallasService.resetPantalla(13);

    switch (imagen)
    {
      case 0:
        this.irAPantalla(9);
        break;

      case 1:
        this.irAPantalla(14);
        break; 
        
      case 2:
        this.irAPantalla(15);
        break;

      case 3:
        this.irAPantalla(16);
        break;

      case 4:
        this.irAPantallaRendirse();
        break;
                    
      default:
        this.irARutaNoPermitida(); 
        break;
    }
  }


  seleccionEnPantalla22(imagen: Number)
  {
    this.pantallasService.resetPantalla(22);

    switch (imagen)
    {
      case 0:
        this.irAPantalla(23);
        break;

      case 1:
        this.irAPantalla(24);
        break; 
        
      case 2:
        this.irAPantalla(21);
        break;
    
      default:
        this.irARutaNoPermitida(); 
        break;
    }
  }

  seleccionEnPantalla25(imagen: Number)
  {
    this.pantallasService.resetPantalla(25);

    switch (imagen)
    {
      case 0:
        this.irAPantalla(26);
        break;

      case 1:
        this.irAPantalla(29);
        break; 
        
      default:
        this.irARutaNoPermitida(); 
        break;
    }
  }


  seleccionEnPantalla27(imagen: Number)
  {
    this.pantallasService.resetPantalla(27);

    switch (imagen)
    {
      case 0:
        this.irAPantalla(28);
        break;

      case 1:
        this.irAPantalla(9);
        break; 
        
      default:
        this.irARutaNoPermitida(); 
        break;
    }
  }

  seleccionEnPantalla31(imagen: Number)
  {
    this.pantallasService.resetPantalla(31);

    switch (imagen)
    {
      case 0:
        this.irAPantalla(34);
        break;

      case 1:
        this.irAPantalla(32);
        break; 

      case 2:
        this.irAPantalla(35);
        break; 
        
      default:
        this.irARutaNoPermitida(); 
        break;
    }
  }

  //-----------------------



  irAPantalla(numeroPantalla: number)
  {
    this.pantallasService.setPantalla(numeroPantalla);
    this.router.navigate(['/game/'+numeroPantalla]);
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

  irANotDefined()
  {
    this.pantallasService.setPantallaIndefinida(true);
    this.router.navigate(['/game/notdefined']);
  }
}
