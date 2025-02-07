import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PantallasService 
{
  visible = signal<Boolean>(false);

  getVisible(): Signal<Boolean>
  {
    return this.visible;
  }

  setVisible(valor: Boolean)
  {
    this.visible.set(valor)
  }

  setAllPantallas()
  {
    this.setPantalla0(true);
    this.setPantalla1(true);
  }

  pantalla0: Boolean=false;
  getPantalla0(): Boolean
  {
    return this.pantalla0;
  }
  setPantalla0(valor: Boolean)
  {
    this.pantalla0=valor;
  }

  pantalla1: Boolean=false;
  getPantalla1(): Boolean
  {
    return this.pantalla1;
  }
  setPantalla1(valor: Boolean)
  {
    this.pantalla1=valor;
  }




}
