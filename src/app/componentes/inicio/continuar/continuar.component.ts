import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ParaContinuar } from '../../../interfaces/paraContinuar';
import { ConfiguracionService } from '../../../servicios/configuracion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-continuar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './continuar.component.html',
  styleUrl: './continuar.component.scss'
})
export class ContinuarComponent 
{
  router = inject(Router)
  
  configuracionService = inject(ConfiguracionService);
  
  opcionesCampoMiedo = this.configuracionService.getCamposMiedo();

  camposFormulario =
  {
    nombre: new FormControl ('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    miedo: new FormControl ('', [Validators.required])
  }

  paraContinuar: ParaContinuar =
  {
    nombre: '',
    miedo: ''
  }

  formulario = new FormGroup(this.camposFormulario);

  volverAMenu()
  {
    this.router.navigate(['inicio/menu/']);
  }


  continuarPartida()
  {
    console.log("Recuperando personaje");

    /*
      Se llama a un personaje guardado en la base de datos:

        1 - Ese personaje se guarda en el PersonajeService
        2 - Se va a la pantalla 1
          this.pantallasService.setPantalla1(true);
          this.pantallasService.setPantalla0(false);
          this.router.navigate(['/game/1']);  
    */
  }
}
