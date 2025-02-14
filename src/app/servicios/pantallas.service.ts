import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PantallasService 
{
  visible = signal<Boolean>(false);
  rutaImagen = signal<String>("");
  textosPantalla = signal<String[]>([]);
  rutasParaDecision = signal<String[]>([]);
  pantallaActiva = signal<Number>(0);

  getRutasParaDecision(): Signal<String[]>
  {
    return this.rutasParaDecision
  }

  setRutasParaDecision(rutas: String[])
  {
    this.rutasParaDecision.set(rutas);
  }

  getPantallaActiva(): Signal<Number>
  {
    return this.pantallaActiva;
  }

  setPantallaActiva(pantalla: Number)
  {
    this.pantallaActiva.set(pantalla);
  }

  getVisible(): Signal<Boolean>
  {
    return this.visible;
  }

  setVisible(valor: Boolean)
  {
    this.visible.set(valor)
  }

  getRutaImagen(): Signal<String>
  {
    return this.rutaImagen;
  }

  setRutaImagen(ruta: String)
  {
    this.rutaImagen.set(ruta);
  }

  setTextos(textos: String[]) 
  {
    this.textosPantalla.set(textos);
  }

  getTextos(): Signal<String[]>
  {
    return this.textosPantalla;
  }

  //Pantalla Abandono
  pantallaAbandono: Boolean=false;

  getPantallaAbandono(): Boolean
  {
    return this.pantallaAbandono;
  }
  setPantallaAbandono(valor: Boolean)
  {
    this.pantallaAbandono=valor;
  }

  //Pantalla 0
  pantalla0: Boolean=false;
  
  getPantalla0(): Boolean
  {
    return this.pantalla0;
  }
  setPantalla0(valor: Boolean)
  {
    this.pantalla0=valor;
  }

  //Pantalla 1
  pantalla1: Boolean=false;

  getPantalla1(): Boolean
  {
    return this.pantalla1;
  }
  setPantalla1(valor: Boolean)
  {
    this.pantalla1=valor;
  }

  //Pantalla 2
  pantalla2: Boolean=false;

  getPantalla2(): Boolean
  {
    return this.pantalla2;
  }
  setPantalla2(valor: Boolean)
  {
    this.pantalla2=valor;
  }

   //Pantalla 3
   pantalla3: Boolean=false;

   getPantalla3(): Boolean
   {
     return this.pantalla3;
   }
   setPantalla3(valor: Boolean)
   {
     this.pantalla3=valor;
   }

   //Pantalla 4
   pantalla4: Boolean=false;

   getPantalla4(): Boolean
   {
     return this.pantalla4;
   }
   setPantalla4(valor: Boolean)
   {
     this.pantalla4=valor;
   }




}
