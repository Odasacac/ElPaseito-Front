import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PantallasService 
{
  visible = signal<Boolean>(false);
  pantallaActiva = signal<Number>(0);

  rutaImagen = signal<String>("");
  textosPantalla = signal<String[]>([]);

  rutasParaBifurcacion = signal<String[]>([]);
 
  nombreCapitulo = signal<String>("");

  opcionesDesvio = signal<String[]>([]);

  getOpcionesDesvio(): Signal<String []>
  {
    return this.opcionesDesvio
  }

  setOpcionesDesvio(opciones: String[])
  {
    this.opcionesDesvio.set(opciones)
  }

  getNombreCapitulo(): Signal<String>
  {
    return this.nombreCapitulo;
  }

  setNombreCapitulo(nombre: String)
  {
    this.nombreCapitulo.set(nombre);
  }

  getRutasParaBifurcacion(): Signal<String[]>
  {
    return this.rutasParaBifurcacion
  }

  setRutasParaBifurcacion(rutas: String[])
  {
    this.rutasParaBifurcacion.set(rutas);
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

  //Pantalla 5
  pantalla5: Boolean=false;

  getPantalla5(): Boolean
  {
    return this.pantalla5;
  }
  setPantalla5(valor: Boolean)
  {
    this.pantalla5=valor;
  }

  //Pantalla 6
  pantalla6: Boolean=false;

  getPantalla6(): Boolean
  {
    return this.pantalla6;
  }
  setPantalla6(valor: Boolean)
  {
     this.pantalla6=valor;
  }

  //Pantalla 7
  pantalla7: Boolean=false;

  getPantalla7(): Boolean
  {
    return this.pantalla7;
  }
  setPantalla7(valor: Boolean)
  {
     this.pantalla7=valor;
  }

  //Pantalla 8
  pantalla8: Boolean=false;

  getPantalla8(): Boolean
  {
    return this.pantalla8;
  }
  setPantalla8(valor: Boolean)
  {
     this.pantalla8=valor;
  }  

  //Pantalla 9
  pantalla9: Boolean=false;

  getPantalla9(): Boolean
  {
    return this.pantalla9;
  }
  setPantalla9(valor: Boolean)
  {
     this.pantalla9=valor;
  }

  //Pantalla 10
  pantalla10: Boolean=false;

  getPantalla10(): Boolean
  {
    return this.pantalla10;
  }
  setPantalla10(valor: Boolean)
  {
     this.pantalla10=valor;
  }

  //Pantalla 11
  pantalla11: Boolean=false;

  getPantalla11(): Boolean
  {
    return this.pantalla11;
  }
  setPantalla11(valor: Boolean)
  {
     this.pantalla11=valor;
  }

    //Pantalla 12
pantalla12: Boolean = false;

getPantalla12(): Boolean 
{
  return this.pantalla12;
}
setPantalla12(valor: Boolean) 
{
  this.pantalla12 = valor;
}

//Pantalla 13
pantalla13: Boolean = false;

getPantalla13(): Boolean 
{
  return this.pantalla13;
}
setPantalla13(valor: Boolean) 
{
  this.pantalla13 = valor;
}

//Pantalla 14
pantalla14: Boolean = false;

getPantalla14(): Boolean 
{
  return this.pantalla14;
}
setPantalla14(valor: Boolean) 
{
  this.pantalla14 = valor;
}

//Pantalla 15
pantalla15: Boolean = false;

getPantalla15(): Boolean 
{
  return this.pantalla15;
}
setPantalla15(valor: Boolean) 
{
  this.pantalla15 = valor;
}

//Pantalla 16
pantalla16: Boolean = false;

getPantalla16(): Boolean 
{
  return this.pantalla16;
}
setPantalla16(valor: Boolean) 
{
  this.pantalla16 = valor;
}

//Pantalla 17
pantalla17: Boolean = false;

getPantalla17(): Boolean 
{
  return this.pantalla17;
}
setPantalla17(valor: Boolean) 
{
  this.pantalla17 = valor;
}

//Pantalla 18
pantalla18: Boolean = false;

getPantalla18(): Boolean 
{
  return this.pantalla18;
}
setPantalla18(valor: Boolean) 
{
  this.pantalla18 = valor;
}

//Pantalla 19
pantalla19: Boolean = false;

getPantalla19(): Boolean 
{
  return this.pantalla19;
}
setPantalla19(valor: Boolean) 
{
  this.pantalla19 = valor;
}

//Pantalla 20
pantalla20: Boolean = false;

getPantalla20(): Boolean 
{
  return this.pantalla20;
}
setPantalla20(valor: Boolean) 
{
  this.pantalla20 = valor;
}

//Pantalla 21
pantalla21: Boolean = false;

getPantalla21(): Boolean 
{
  return this.pantalla21;
}
setPantalla21(valor: Boolean) 
{
  this.pantalla21 = valor;
}

//Pantalla 22
pantalla22: Boolean = false;

getPantalla22(): Boolean 
{
  return this.pantalla22;
}
setPantalla22(valor: Boolean) 
{
  this.pantalla22 = valor;
}

//Pantalla 23
pantalla23: Boolean = false;

getPantalla23(): Boolean 
{
  return this.pantalla23;
}
setPantalla23(valor: Boolean) 
{
  this.pantalla23 = valor;
}



}
