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

        case 99:
          this.irAMenu();
          break;
          
        default:
          this.irARutaNoPermitida();
          break;
    }
  }


  irAPantalla2()
  {
    this.pantallasService.setPantalla1(false);
    this.pantallasService.setPantalla2(true);
    this.router.navigate(['/game/2']);
  }

  irAPantalla3()
  {
    this.pantallasService.setPantalla2(false);
    this.pantallasService.setPantalla3(true);
    this.router.navigate(['/game/3']);
  }

  irAPantalla6()
  {
    this.pantallasService.setPantalla5(false);
    this.pantallasService.setPantalla6(true);
    this.router.navigate(['/game/6']);
  }

  irAPantalla7()
  {
    this.pantallasService.setPantalla6(false);
    this.pantallasService.setPantalla7(true);
    this.router.navigate(['/game/7']);
  }

  irAPantalla8()
  {
    this.pantallasService.setPantalla7(false);
    this.pantallasService.setPantalla8(true);
    this.router.navigate(['/game/8']);
  }

  irAPantalla11()
  {
    this.pantallasService.setPantalla10(false);
    this.pantallasService.setPantalla11(true);
    this.router.navigate(['/game/11']);
  }

  irAPantalla12()
  {
    this.pantallasService.setPantalla11(false);
    this.pantallasService.setPantalla12(true);
    this.router.navigate(['/game/12']);
  }

  irAPantalla13()
  {
    this.pantallasService.setPantalla12(false);
    this.pantallasService.setPantalla13(true);
    this.router.navigate(['/game/13']);
  }

  irAPantalla14()
  {
    this.pantallasService.setPantalla13(false);
    this.pantallasService.setPantalla14(true);
    this.router.navigate(['/game/14']);
  }

  irAPantalla15()
  {
    this.pantallasService.setPantalla14(false);
    this.pantallasService.setPantalla15(true);
    this.router.navigate(['/game/15']);
  }

  irAPantalla16()
  {
    this.pantallasService.setPantalla15(false);
    this.pantallasService.setPantalla16(true);
    this.router.navigate(['/game/16']);
  }

  irAPantalla17()
  {
    this.pantallasService.setPantalla16(false);
    this.pantallasService.setPantalla17(true);
    this.router.navigate(['/game/17']);
  }




  irARutaNoPermitida()
  {
    this.router.navigate(['nopermitida']);
  }

  irAMenu()
  {
    this.router.navigate(['/inicio/menu']);
  }

}
