import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadoJuegoService 
{
  caminoDespejado: boolean = false;


  getCaminoDespejado(): boolean
  {
    return this.caminoDespejado;
  }

  setCaminoDespejado(despejado: boolean)
  {
    this.caminoDespejado = despejado;
  }

}
