import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ParaContinuar } from '../../../interfaces/paraContinuar';
import { ConfiguracionService } from '../../../servicios/configuracion.service';
import { CommonModule } from '@angular/common';
import { PantallasService } from '../../../servicios/pantallas.service';
import { ApiService } from '../../../servicios/api.service';
import { PersonajeService } from '../../../servicios/personaje.service';

@Component({
  selector: 'app-continuar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './continuar.component.html',
  styleUrl: './continuar.component.scss'
})
export class ContinuarComponent 
{
    pantallasService = inject(PantallasService);
    personajeService = inject(PersonajeService)
    configuracionService = inject(ConfiguracionService);
    apiService = inject(ApiService);
    router = inject(Router);
  

  opcionesCampoMiedo = this.configuracionService.getCamposMiedo();

  textoError: String ="";

  camposFormulario =
  {
    nombre: new FormControl ('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    miedo: new FormControl ('', [Validators.required])
  }

  paraContinuar: ParaContinuar =
  {
    nombre: '',
    miedo: 0
  }

  formulario = new FormGroup(this.camposFormulario);

  volverAMenu()
  {
    this.router.navigate(['inicio/menu/']);
  }


  continuarPartida()
  {
    if(this.formulario.valid)
    {
      this.textoError="";

      const datosFormulario = this.formulario.value;

      if (datosFormulario.nombre && datosFormulario.miedo) 
      {
        const continuarPersonaje: ParaContinuar = 
        {
          nombre: datosFormulario.nombre,
          miedo: Number(datosFormulario.miedo),
        }

        const observerContinuarPersonaje =
        {
            next: (respuesta:any) =>
            {
              this.personajeService.setPersonaje(respuesta.personaje);
              this.pantallasService.setVisible(true);
              const capitulo: Number = respuesta.personaje.capitulo

              switch (capitulo)
              {
                case 1:
                  this.pantallasService.setPantalla(1);
                  this.router.navigate(['/game/1']);
                  break;

                default:
                  this.pantallasService.setVisible(false);
                  this.router.navigate(['inicio/menu']);
              }

            },

            error: (error: any) =>
            {
              this.textoError = "No se ha podido recuperar esta historia." ;
            }
        }

        this.apiService.continuarPersonaje(continuarPersonaje).subscribe(observerContinuarPersonaje);
      }
      else
      {
        this.textoError = "Error inesperado: Formulario válido, pero hay algún valor nulo."
      }

    }
    else
    {
      const nombreControl = this.formulario.get("nombre");

      if (nombreControl)
      {
        if (nombreControl.hasError("required"))
        {
          this.textoError = "El nombre es obligatorio.";
        }

        else if (nombreControl.hasError("minlength") || nombreControl.hasError("maxlength"))
        {
          let longitudActual: Number = 0;

          if (nombreControl.value)
          {
            longitudActual = nombreControl.value.length;
          }
            
          this.textoError = "El nombre debe tener una longitud entre 2 y 20 carácteres y actualmente tiene: " + longitudActual + ".";
        }
      }


      const miedoControl = this.formulario.get("miedo");

      if (miedoControl)
      {
        if (miedoControl.hasError("required"))
        {
          this.textoError = "Indicar a qué temías es obligatorio.";
        }
      }
    }
  }
}
