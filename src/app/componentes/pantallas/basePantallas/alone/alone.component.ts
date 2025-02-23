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
        case 1:
          this.irAPantalla2();
          break;

        case 2:
          this.irAPantalla3();
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

        case 10:
          this.irAPantalla11();
          break;

        case 11:
          this.irAPantalla12();
          break;

        case 12:
          this.irAPantalla13();
          break;

        case 13:
          this.irAPantalla14();
          break;

        case 14:
          this.irAPantalla15();
          break;

        case 15:
          this.irAPantalla16();
          break;

        case 16:
          this.irAPantalla17();
          break;
        
        case 20:
          this.irAPantalla21();
          break;

        case 21:
          this.irAPantalla22();
          break;

        case 22:
          this.irAPantalla23();
          break;

        case 99:
          this.irAMenu();
          break;
          
        default:
          this.irARutaNoPermitida();
          break;
    }
  }

  
  irARutaNoPermitida()
  {
    this.router.navigate(['nopermitida']);
  }

  irAMenu()
  {
    this.router.navigate(['/inicio/menu']);
  }

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

  irAPantalla11()
  {
    this.pantallasService.resetPantalla(10);
    this.pantallasService.setPantalla(11);
    this.router.navigate(['/game/11']);
  }

  irAPantalla12()
  {
    this.pantallasService.resetPantalla(11);
    this.pantallasService.setPantalla(12);
    this.router.navigate(['/game/12']);
  }

  irAPantalla13()
  {
    this.pantallasService.resetPantalla(12);
    this.pantallasService.setPantalla(13);
    this.router.navigate(['/game/13']);
  }

  irAPantalla14()
  {
    this.pantallasService.resetPantalla(13);
    this.pantallasService.setPantalla(14);
    this.router.navigate(['/game/14']);
  }

  irAPantalla15()
  {
    this.pantallasService.resetPantalla(14);
    this.pantallasService.setPantalla(15);
    this.router.navigate(['/game/15']);
  }

  irAPantalla16()
  {
    this.pantallasService.resetPantalla(15);
    this.pantallasService.setPantalla(16);
    this.router.navigate(['/game/16']);
  }

  irAPantalla17()
  {
    this.pantallasService.resetPantalla(16);
    this.pantallasService.setPantalla(17);
    this.router.navigate(['/game/17']);
  }

  irAPantalla21()
  {
    this.pantallasService.resetPantalla(20);
    this.pantallasService.setPantalla(21);
    this.router.navigate(['/game/21']);
  }

  irAPantalla22()
  {
    this.pantallasService.resetPantalla(21);
    this.pantallasService.setPantalla(22);
    this.router.navigate(['/game/22']);
  }

  irAPantalla23()
  {
    this.pantallasService.resetPantalla(22);
    this.pantallasService.setPantalla(23);
    this.router.navigate(['/game/23']);
  }



}
