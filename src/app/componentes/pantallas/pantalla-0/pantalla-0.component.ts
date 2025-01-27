import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ParaNuevoPersonaje } from '../../../interfaces/paraNuevoPersojane';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pantalla-0',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './pantalla-0.component.html',
  styleUrl: './pantalla-0.component.css'
})
export class Pantalla0Component 
{

  opcionesCampoMiedo = 
  [
    { id: 1, nombre: 'El dolor' },
    { id: 2, nombre: 'El fracaso' },
    { id: 3, nombre: 'La soledad' },
    { id: 4, nombre: 'Lo desconocido' },
  ];
  
  opcionesCampoOlvido = 
  [
    { id: 1, nombre: 'Los nombres' },
    { id: 2, nombre: 'Las promesas' },
    { id: 3, nombre: 'Los compromisos' },
    { id: 4, nombre: 'Las fechas importantes' },
  ];


  camposFormulario =
    {
      nombre: new FormControl ('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      miedo: new FormControl ('', [Validators.required]),
      olvido: new FormControl ('', [Validators.required])
    }
  
    paraNuevoPersonaje: ParaNuevoPersonaje =
    {
      nombre: '',
      miedo: '',
      olvido:''
    }
  
    formulario = new FormGroup(this.camposFormulario);

    crearPersonaje()
    {
      console.log(this.formulario.value);
    }

}
