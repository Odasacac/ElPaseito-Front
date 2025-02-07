import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ParaNuevoPersonaje } from '../../../interfaces/paraNuevoPersonaje';
import { CommonModule } from '@angular/common';
import { ConfiguracionService } from '../../../servicios/configuracion.service';
import { PantallasService } from '../../../servicios/pantallas.service';
import { Router } from '@angular/router';
import { ApiService } from '../../../servicios/api.service';

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
  router = inject(Router);
  configuracionService = inject(ConfiguracionService);
  apiService = inject(ApiService);

  opcionesCampoMiedo = this.configuracionService.getCamposMiedo();
  opcionesCampoOlvido = this.configuracionService.getCamposOlvido();

  paraNuevoPersonaje: ParaNuevoPersonaje =
  {
    nombre: '',
    miedo: '',
    olvido:''
  }

  
  camposFormulario =
  {
    nombre: new FormControl ('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    miedo: new FormControl ('', [Validators.required]),
    olvido: new FormControl ('', [Validators.required])
  }

  formulario = new FormGroup(this.camposFormulario);

  

  ngOnInit()
  {
    if (this.pantallasService.getPantalla0())
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
    console.log("Creando personaje");

    /*
      Se crea un personaje nuevo con todos los atributos:
        
      paraNuevoPersonaje =
      {
      }

      Y se hacen tres cosas:

        1 - Ese personaje se guarda en la base de datos

          const observerSavePJ=
          {
          }

          this.apiService.savePJ(nuevoPersonaje).subscribe(observerSavePJ);

        2 - Ese personaje se guarda en el PersonajeService

          this.personajeService.setPersonaje(nuevoPersonaje)

        3 - Se va a la pantalla 1
          this.pantallasService.setPantalla1(true);
          this.pantallasService.setPantalla0(false);
          this.router.navigate(['/game/1']);
    */
  }

}
