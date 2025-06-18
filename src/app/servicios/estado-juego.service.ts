import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadoJuegoService 
{
  caminoDespejado: boolean = false;
  bandidosVistosEnElDesfiladero: boolean = false;

  getBandidosVistosEnElDesfiladero(): boolean
  {
    return this.bandidosVistosEnElDesfiladero;
  }

  setBandidosVistosEnElDesfiladero(vistos: boolean)
  {
    this.bandidosVistosEnElDesfiladero = vistos;
  }

  getCaminoDespejado(): boolean
  {
    return this.caminoDespejado;
  }

  setCaminoDespejado(despejado: boolean)
  {
    this.caminoDespejado = despejado;
  }

}
