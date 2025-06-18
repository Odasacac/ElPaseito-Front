import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { Router } from '@angular/router';
import { EstadoJuegoService } from '../../../../servicios/estado-juego.service';


@Component({
  selector: 'app-alone',
  standalone: true,
  imports: [],
  templateUrl: './alone.component.html',
  styleUrl: './alone.component.css'
})
export class AloneComponent 
{
  router = inject(Router);
  pantallasService = inject(PantallasService);
  estadoDelJuegoService = inject (EstadoJuegoService);

  rutaImagen = this.pantallasService.getRutaImagen();
  textos = this.pantallasService.getTextos();
  textoBoton: String = "➜";



  siguiente()
  {
    let pantallaActiva = this.pantallasService.getPantallaActiva()();

    switch (pantallaActiva)
    {
        /*
          Ir poniendo aquí los:

            case X:
              this.irAPantallaB();
              break;
        */
       
        //-----------------------

        case 1:
          this.irAPantalla2();
          break;

        case 2:
          this.irAPantalla3();
          break;

        case 3:
          this.irAPantalla4();
          break;

        case 4:
          this.irAPantalla5();
          break;

        case 5:
          this.irAPantalla6();
          break;

        case 6:
          this.irAPantalla7();
          break;

        case 7:
          this.irAPantalla8();
          break;

        case 9:
          this.irAPantalla10();
          break;

        case 11:
          this.irAPantalla40();
          break;

        case 12:
          this.irAPantalla13();
          break;

        case 14:
          //this.irAPantallaX();
          break;

        case 15:
          this.irAPantalla19();
          break;

        case 16:
          this.irAPantalla12Desde16();
          break;

        case 18:
          //this.irAPantallaX();
          break;

        case 19:
          if (this.estadoDelJuegoService.getCaminoDespejado())
          {
            this.irAPantalla20Desde19();
          }
          else
          {
            this.irAPantalla12Desde19();
          }
          
          break;

        case 20:
          this.irAPantalla22();
          break;

        case 21:
          this.irAPantalla12Desde21();
          break;

        case 26:
          this.irAPantalla27();
          break;

        case 28:
          this.irAPantalla41();
          break;

        case 29:
          this.irAPantalla31();
          break;

        case 30:
          this.irAPantalla36();
          break;

        case 32:
          this.irAPantalla33();
          break;

        case 33:
          this.irAPantalla9Desde33();
          break;

        case 37:
          this.irAPantalla24Desde37();
          break;

        case 38:
          this.irAPantalla39();
          break;

        case 39:
          this.irAPantalla28Desde39();
          break;

        case 40:
          this.irAPantalla25();
          break;

        //-----------------------

        case 99:
          this.irAMenu();
          break;
          
        default:
          this.irARutaNoPermitida();
          break;
    }
  }


  /*
    Ir poniendo aquí los:

       irAPantallaB()
        {
          this.pantallasService.resetPantalla(A);
          this.pantallasService.setPantalla(B);
          this.router.navigate(['/game/B']);
        }            
  
    */

  //-----------------------


  irAPantalla2()
  {
    this.pantallasService.resetPantalla(1);
    this.pantallasService.setPantalla(2);
    this.router.navigate(['/game/2']);
  }  

  irAPantalla3()
  {
    this.pantallasService.resetPantalla(2);
    this.pantallasService.setPantalla(3);
    this.router.navigate(['/game/3']);
  } 

  irAPantalla4()
  {
    this.pantallasService.resetPantalla(3);
    this.pantallasService.setPantalla(4);
    this.router.navigate(['/game/4']);
  } 

  irAPantalla5()
  {
    this.pantallasService.resetPantalla(4);
    this.pantallasService.setPantalla(5);
    this.router.navigate(['/game/5']);
  }

  irAPantalla6()
  {
    this.pantallasService.resetPantalla(5);
    this.pantallasService.setPantalla(6);
    this.router.navigate(['/game/6']);
  } 

  irAPantalla7()
  {
    this.pantallasService.resetPantalla(6);
    this.pantallasService.setPantalla(7);
    this.router.navigate(['/game/7']);
  } 

  irAPantalla8()
  {
    this.pantallasService.resetPantalla(7);
    this.pantallasService.setPantalla(8);
    this.router.navigate(['/game/8']);
  } 

  irAPantalla9Desde33()
  {
    this.pantallasService.resetPantalla(33);
    this.pantallasService.setPantalla(9);
    this.router.navigate(['/game/9']);
  } 


  irAPantalla10()
  {
    this.pantallasService.resetPantalla(9);
    this.pantallasService.setPantalla(10);
    this.router.navigate(['/game/10']);
  } 

  irAPantalla12Desde16()
  {
    this.pantallasService.resetPantalla(16);
    this.pantallasService.setPantalla(12);
    this.router.navigate(['/game/12']);
  }

  irAPantalla12Desde19()
  {
    this.pantallasService.resetPantalla(19);
    this.pantallasService.setPantalla(12);
    this.router.navigate(['/game/12']);
  }

  
  irAPantalla12Desde21()
  {
    this.pantallasService.resetPantalla(21);
    this.pantallasService.setPantalla(12);
    this.router.navigate(['/game/12']);
  }

  
  irAPantalla12Desde34()
  {
    this.pantallasService.resetPantalla(34);
    this.pantallasService.setPantalla(12);
    this.router.navigate(['/game/12']);
  } 
  
  irAPantalla13()
  {
    this.pantallasService.resetPantalla(12);
    this.pantallasService.setPantalla(13);
    this.router.navigate(['/game/13']);
  } 


  
  irAPantalla19()
  {
    this.pantallasService.resetPantalla(15);
    this.pantallasService.setPantalla(19);
    this.router.navigate(['/game/19']);
  }

  irAPantalla20Desde19()
  {
    this.pantallasService.resetPantalla(19);
    this.pantallasService.setPantalla(20);
    this.router.navigate(['/game/20']);
  }

    
  irAPantalla24Desde37()
  {
    this.pantallasService.resetPantalla(37);
    this.pantallasService.setPantalla(24);
    this.router.navigate(['/game/24']);
  }
  
  irAPantalla22()
  {
    this.pantallasService.resetPantalla(20);
    this.pantallasService.setPantalla(22);
    this.router.navigate(['/game/22']);
  }

  irAPantalla25()
  {
    this.pantallasService.resetPantalla(40);
    this.pantallasService.setPantalla(25);
    this.router.navigate(['/game/25']);
  }

  irAPantalla27()
  {
    this.pantallasService.resetPantalla(26);
    this.pantallasService.setPantalla(27);
    this.router.navigate(['/game/27']);
  }

  irAPantalla28Desde39()
  {
    this.pantallasService.resetPantalla(39);
    this.pantallasService.setPantalla(28);
    this.router.navigate(['/game/28']);
  }

  irAPantalla31()
  {
    this.pantallasService.resetPantalla(29);
    this.pantallasService.setPantalla(31);
    this.router.navigate(['/game/31']);
  }

  irAPantalla33()
  {
    this.pantallasService.resetPantalla(32);
    this.pantallasService.setPantalla(33);
    this.router.navigate(['/game/33']);
  }

  
  irAPantalla36()
  {
    this.pantallasService.resetPantalla(30);
    this.pantallasService.setPantalla(36);
    this.router.navigate(['/game/36']);
  }

  irAPantalla39()
  {
    this.pantallasService.resetPantalla(38);
    this.pantallasService.setPantalla(39);
    this.router.navigate(['/game/39']);
  }


    
  irAPantalla40()
  {
    this.pantallasService.resetPantalla(11);
    this.pantallasService.setPantalla(40);
    this.router.navigate(['/game/40']);
  } 

  irAPantalla41()
  {
    this.pantallasService.resetPantalla(28);
    this.pantallasService.setPantalla(41);
    this.router.navigate(['/game/41']);
  } 
  
    
  //-----------------------


  
  irARutaNoPermitida()
  {
    this.router.navigate(['nopermitida']);
  }

  irAMenu()
  {
    this.router.navigate(['/inicio/menu']);
  }


}
