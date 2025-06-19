import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadoJuegoService 
{
  caminoDespejado: boolean = false;
  bandidosVistosEnElDesfiladero: boolean = false;
  a35Desde36: boolean = false;

  getA35Desde36(): boolean
  {
    return this.a35Desde36;
  }

  setA35Desde36(valor: boolean)
  {
    this.a35Desde36=valor;
  }

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
