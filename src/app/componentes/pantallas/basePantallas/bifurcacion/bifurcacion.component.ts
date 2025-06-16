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
        this.irAPantalla11();
        break;

      case 1:
        this.irAPantalla17();
        break; 
        
      case 2:
        this.irAPantalla18();
        break;

      case 3:
        this.irAPantalla12();
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
        this.irAPantalla9();
        break;

      case 1:
        this.irAPantalla14();
        break; 
        
      case 2:
        this.irAPantalla15();
        break;

      case 3:
        this.irAPantalla16();
        break;

      case 4:
        this.irAPantallaRendirse();
        break;
                    
      default:
        this.irARutaNoPermitida(); 
        break;
    }
  }




  //-----------------------



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

      
      irAPantalla12()
      {
        this.pantallasService.setPantalla(12);
        this.router.navigate(['/game/12']);
      }    

      irAPantalla13()
      {
        this.pantallasService.setPantalla(13);
        this.router.navigate(['/game/13']);
      }

       irAPantalla14()
      {
        this.pantallasService.setPantalla(14);
        this.router.navigate(['/game/14']);
      }    

       irAPantalla15()
      {
        this.pantallasService.setPantalla(15);
        this.router.navigate(['/game/15']);
      }    

       irAPantalla16()
      {
        this.pantallasService.setPantalla(16);
        this.router.navigate(['/game/16']);
      }    


      irAPantalla17()
      {
        this.pantallasService.setPantalla(17);
        this.router.navigate(['/game/17']);
      }    

      irAPantalla18()
      {
        this.pantallasService.setPantalla(18);
        this.router.navigate(['/game/18']);
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

  irANotDefined()
  {
    this.pantallasService.setPantallaIndefinida(true);
    this.router.navigate(['/game/notdefined']);
  }
}
