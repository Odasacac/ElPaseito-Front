import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ParaContinuar } from '../../../interfaces/paraContinuar';

@Component({
  selector: 'app-continuar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './continuar.component.html',
  styleUrl: './continuar.component.scss'
})
export class ContinuarComponent 
{
  router = inject(Router)

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
    console.log(this.formulario.value);
  }
}
