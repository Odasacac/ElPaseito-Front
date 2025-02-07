import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguracionService } from '../../../servicios/configuracion.service';
import { PantallasService } from '../../../servicios/pantallas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent 
{
  router = inject(Router);
  configuracionService = inject(ConfiguracionService);
  pantallasService = inject(PantallasService); 

  ngOnInit()
  {
    /*
      Menu principal

      Aqui llamar al back para guardar en ConfiguracionService las opciones de miedo y olvido
    
    */      
  }

  nuevaPartida()
  {
    this.pantallasService.setPantalla0(true);
    this.pantallasService.setVisible(true);
    this.router.navigate(['/game/0']);
  }

  continuar()
  {
    this.router.navigate(['/inicio/continuar']);
  }

  opciones()
  {
    this.router.navigate(['/inicio/opciones']);
  }

  salir()
  {
    this.router.navigate(['/inicio/bienvenida']);
  }


}
