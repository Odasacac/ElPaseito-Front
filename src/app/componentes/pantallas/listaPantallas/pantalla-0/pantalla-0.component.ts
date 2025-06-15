import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ParaNuevoPersonaje } from '../../../../interfaces/paraNuevoPersonaje';
import { CommonModule } from '@angular/common';
import { ConfiguracionService } from '../../../../servicios/configuracion.service';
import { PantallasService } from '../../../../servicios/pantallas.service';
import { Router } from '@angular/router';
import { ApiService } from '../../../../servicios/api.service';
import { PersonajeService } from '../../../../servicios/personaje.service';
import { NuevoPersonaje } from '../../../../interfaces/NuevoPersonaje';

@Component({
  selector: 'app-pantalla-0',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './pantalla-0.component.html',
  styleUrl: './pantalla-0.component.css'
})
export class Pantalla0Component 
{
  pantallasService = inject(PantallasService);
  personajeService = inject(PersonajeService)
  configuracionService = inject(ConfiguracionService);
  apiService = inject(ApiService);
  router = inject(Router);
  pantallaActual: Number = 0;

  opcionesCampoMiedo = this.configuracionService.getCamposMiedo();
  opcionesCampoOlvido = this.configuracionService.getCamposOlvido();
  textoError: String ="";
  verNoConexion: Boolean = false;
  pulsado: Boolean = false;
  textoContinuarSinGuardado: String ="¿Continuar de todas formas? No podrás guardar tu avance.";

  paraNuevoPersonaje: ParaNuevoPersonaje =
  {
    nombre: '',
    miedo: 0,
    olvido: 0
  }

  
  camposFormulario =
  {
    nombre: new FormControl ('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    miedo: new FormControl ('', [Validators.required]),
    olvido: new FormControl ('', [Validators.required])
  }

  formulario = new FormGroup(this.camposFormulario);

  formularioInvalido: Boolean = false;

  

  ngOnInit()
  {
    if (this.pantallasService.getPantalla(this.pantallaActual))
    {
      this.pantallasService.setVisible(true);
    }
    else
    {
      this.pantallasService.setVisible(false);
    }    
  }


  crearPersonaje()
  {
    this.formularioInvalido=false;
    this.verNoConexion = false;
    this.pulsado = true;

    if(this.formulario.valid)
    {
      this.textoError="";

      const datosFormulario = this.formulario.value;

      if (datosFormulario.nombre && datosFormulario.miedo && datosFormulario.olvido) 
      {
        const nuevoPersonaje: ParaNuevoPersonaje = 
        {
          nombre: datosFormulario.nombre,
          miedo: Number(datosFormulario.miedo),
          olvido: Number(datosFormulario.olvido)
        }

        const observerParaNuevoPersonaje =
        {
            next: (respuesta:any) =>
            {
              this.personajeService.setPersonaje(respuesta.personaje);
              this.irAPantalla1();
            },

            error: (error: any) =>
            {
              this.verNoConexion = true;
              this.textoError = "No se ha podido guardar el personaje.";
              
              const personajeVolatil: NuevoPersonaje =
              {
                nombre: "",
                miedo: 0,
                olvido: 0,
                suerte: 5,
                nivelDeMiedo: 0,
                nivelDeTranquilidad: 0,
                impactos: 0,
                master: false,
                capitulo: 1,
                exploracion: 0,
              }

              this.personajeService.setPersonaje(personajeVolatil);
            }
        }

        this.apiService.guardarNuevoPersonaje(nuevoPersonaje).subscribe(observerParaNuevoPersonaje);
      }
      else
      {
        this.textoError = "Error inesperado: Formulario válido, pero hay algún valor nulo."
      }
    }
    else
    {
      this.pulsado = false;
      this.formularioInvalido=true;
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
            this.textoError = "Indicar a qué temes es obligatorio.";
          }
        }

      const olvidoControl = this.formulario.get("olvido");

      if (olvidoControl)
        {
          if (olvidoControl.hasError("required"))
          {
            this.textoError = "Indicar qué tiendes a olvidar es obligatorio.";
          }
        }
    }
  }


  irAPantalla1()
  {
    this.pantallasService.setPantalla(1);
    this.pantallasService.resetPantalla(this.pantallaActual);
    this.router.navigate(['/game/1']);
  }

  irAMenu()
  {
    this.router.navigate(['inicio/menu/']);
  }

}
