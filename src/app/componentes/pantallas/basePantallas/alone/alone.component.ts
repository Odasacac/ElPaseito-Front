import { Component, inject } from '@angular/core';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { Router } from '@angular/router';


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

  rutaImagen = this.pantallasService.getRutaImagen();
  textos = this.pantallasService.getTextos();



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

  irAPantalla10()
  {
    this.pantallasService.resetPantalla(9);
    this.pantallasService.setPantalla(10);
    this.router.navigate(['/game/10']);
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
