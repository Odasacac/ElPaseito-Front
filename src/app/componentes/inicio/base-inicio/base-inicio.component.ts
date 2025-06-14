import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfiguracionService } from '../../../servicios/configuracion.service';
import { Campo } from '../../../interfaces/campos';

@Component({
  selector: 'app-base-inicio',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './base-inicio.component.html',
  styleUrl: './base-inicio.component.css'
})
export class BaseInicioComponent 
{
  configuracionService = inject(ConfiguracionService);

  public tituloNovela: String = "Titulo De La Novela";

  ngOnInit()
  {
    this.configuracionService.generarConfiguracion();
  }

  

}
