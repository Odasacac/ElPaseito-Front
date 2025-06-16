import { inject, Injectable, Signal, signal } from '@angular/core';
import { PersonajeService } from './personaje.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PantallasService 
{
  personajeService = inject(PersonajeService);
  apiService = inject(ApiService);

  textoDecisionComponent: String ="";

  visible = signal<Boolean>(false);

  pantallaActiva = signal<Number>(0);

  rutaImagen = signal<String>("");
  textosPantalla = signal<String[]>([]);

  rutasParaBifurcacion = signal<String[]>([]);
 
  numeroCapitulo = signal<Number>(0);
  nombreCapitulo = signal<String>("");

  opcionesDesvio = signal<String[]>([]);

  rutaVideo = signal<String>("");

  getTextoDecision(): String
  {
    return this.textoDecisionComponent;
  }

  setTextoDecision(texto: String)
  {
    this.textoDecisionComponent = texto;
  }

  getRutaVideo(): Signal<String>
  {
    return this.rutaVideo;
  }

  setRutaVideo(ruta: String)
  {
    this.rutaVideo.set(ruta);
  }

  getOpcionesDesvio(): Signal<String []>
  {
    return this.opcionesDesvio
  }

  setOpcionesDesvio(opciones: String[])
  {
    this.opcionesDesvio.set(opciones)
  }

  getNumeroCapitulo(): Signal<Number>
  {
    return this.numeroCapitulo;
  }

  setNumeroCapitulo(titulo: Number)
  {
    this.numeroCapitulo.set(titulo);
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

  //Métodos útiles

  prepararPantalla(pantalla: Number): Boolean
  {
    if (this.getPantalla(pantalla))
    {
      this.setVisible(true);
      return true;
    }
    else
    {
      this.setVisible(false);
      return false;
    }
  }

  guardarPartida()
  {
    const observadorGuardarPartida =
    {
      next: (respuesta:any) =>
      {

      }

    }

    this.apiService.guardarProgreso(this.personajeService.getPersonaje()).subscribe(observadorGuardarPartida);

  }

  //Métodos de las pantallas

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

  //Pantalla Indefinida
  pantallaIndefinida: Boolean=false;
  getPantallaIndefinida(): Boolean
  {
    return this.pantallaIndefinida;
  }
  setPantallaIndefinida(valor: Boolean)
  {
    this.pantallaAbandono=valor;
  }

  
  //Pantallas

  pantalla0: Boolean=false;
  
  /*
    Aqui ir poniendo:

      pantallaA: Boolean=false;
  */

  //----------------

  pantalla1: boolean = false;
  pantalla2: boolean = false;
  pantalla3: boolean = false;
  pantalla4: boolean = false;
  pantalla5: boolean = false;
  pantalla6: boolean = false;
  pantalla7: boolean = false;
  pantalla8: boolean = false;
  pantalla9: boolean = false;
  pantalla10: boolean = false;
  pantalla11: boolean = false;
  pantalla12: boolean = false;
  pantalla13: boolean = false;
  pantalla14: boolean = false;
  pantalla15: boolean = false;
  pantalla16: boolean = false;
  pantalla17: boolean = false;
  pantalla18: boolean = false;
  pantalla19: boolean = false;
  pantalla20: boolean = false;
  pantalla21: boolean = false;








    
  //----------------

  getPantalla(pantalla: Number): Boolean
  {
    switch (pantalla) 
    {
      case 0:

        return this.pantalla0;

      /*
        Aqui ir poniendo:

       case A:

        return this.pantallaA;
      */

      //----------------

      case 1:
        return this.pantalla1;
      case 2:
        return this.pantalla2;
      case 3:
        return this.pantalla3;
      case 4:
        return this.pantalla4;
      case 5:
        return this.pantalla5;
      case 6:
        return this.pantalla6;
      case 7:
        return this.pantalla7;
      case 8:
        return this.pantalla8;
      case 9:
        return this.pantalla9;
      case 10:
        return this.pantalla10;
      case 11:
        return this.pantalla11;
      case 12:
        return this.pantalla12;
      case 13:
        return this.pantalla13;
      case 14:
        return this.pantalla14;
      case 15:
        return this.pantalla15;
      case 16:
        return this.pantalla16;
      case 17:
        return this.pantalla17;
      case 18:
        return this.pantalla18;
      case 19:
        return this.pantalla19;
      case 20:
        return this.pantalla20;
      case 21:
        return this.pantalla21;
            





            
      //----------------

      default:

        return false; 
    }
  }

  setPantalla(pantalla: number): void 
  {
    this.setPantallaActiva(pantalla);

    switch (pantalla) 
    {
      case 0:

        this.pantalla0 = true;
        break;

    /*
      Aqui ir poniendo:

       case A:

        this.pantallaA = true;
        break;
    */

      //----------------

      case 1:
        this.pantalla1 = true;
        break;
      case 2:
        this.pantalla2 = true;
        break;
      case 3:
        this.pantalla3 = true;
        break;
      case 4:
        this.pantalla4 = true;
        break;
      case 5:
        this.pantalla5 = true;
        break;
      case 6:
        this.pantalla6 = true;
        break;
      case 7:
        this.pantalla7 = true;
        break;
      case 8:
        this.pantalla8 = true;
        break;
      case 9:
        this.pantalla9 = true;
        break;
      case 10:
        this.pantalla10 = true;
        break;
      case 11:
        this.pantalla11 = true;
        break;
      case 12:
        this.pantalla12 = true;
        break;
      case 13:
        this.pantalla13 = true;
        break;
      case 14:
        this.pantalla14 = true;
        break;
      case 15:
        this.pantalla15 = true;
        break;
      case 16:
        this.pantalla16 = true;
        break;
      case 17:
        this.pantalla17 = true;
        break;
      case 18:
        this.pantalla18 = true;
        break;
      case 19:
        this.pantalla19 = true;
        break;
      case 20:
        this.pantalla20 = true;
        break;
      case 21:
        this.pantalla21 = true;
        break;


            





            
      //----------------

      default:

        break;
    }
  }

  resetPantalla(pantalla: Number): void 
  {
    switch (pantalla) 
    {
      case 0:

        this.pantalla0 = false;
        break;

       /*
      Aqui ir poniendo:

       case A:

        this.pantallaA = false;
        break;
    */

      //----------------

       case 1:
        this.pantalla1 = false;
        break;
      case 2:
        this.pantalla2 = false;
        break;
      case 3:
        this.pantalla3 = false;
        break;
      case 4:
        this.pantalla4 = false;
        break;
      case 5:
        this.pantalla5 = false;
        break;
      case 6:
        this.pantalla6 = false;
        break;
      case 7:
        this.pantalla7 = false;
        break;
      case 8:
        this.pantalla8 = false;
        break;
      case 9:
        this.pantalla9 = false;
        break;
      case 10:
        this.pantalla10 = false;
        break;
      case 11:
        this.pantalla11 = false;
        break;
      case 12:
        this.pantalla12 = false;
        break;
      case 13:
        this.pantalla13 = false;
        break;
      case 14:
        this.pantalla14 = false;
        break;
      case 15:
        this.pantalla15 = false;
        break;
      case 16:
        this.pantalla16 = false;
        break;
      case 17:
        this.pantalla17 = false;
        break;
      case 18:
        this.pantalla18 = false;
        break;
      case 19:
        this.pantalla19 = false;
        break;
      case 20:
        this.pantalla20 = false;
        break;
      case 21:
        this.pantalla21 = false;
        break;





            
      //----------------

      default:

        break;
    }
  } 

}
