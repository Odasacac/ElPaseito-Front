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


  visible = signal<Boolean>(false);

  pantallaActiva = signal<Number>(0);

  rutaImagen = signal<String>("");
  textosPantalla = signal<String[]>([]);

  rutasParaBifurcacion = signal<String[]>([]);
 
  numeroCapitulo = signal<Number>(0);
  nombreCapitulo = signal<String>("");

  opcionesDesvio = signal<String[]>([]);

  rutaVideo = signal<String>("");

  
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

  pantalla0: Boolean=false;
  pantalla1: Boolean=false;
  pantalla2: Boolean=false;
  pantalla3: Boolean=false;
  pantalla4: Boolean=false;
  pantalla5: Boolean=false;
  pantalla6: Boolean=false;
  pantalla7: Boolean=false;
  pantalla8: Boolean=false;
  pantalla9: Boolean=false;
  pantalla10: Boolean=false;
  pantalla11: Boolean=false;
  pantalla12: Boolean = false;
  pantalla13: Boolean = false;
  pantalla14: Boolean = false;
  pantalla15: Boolean = false;
  pantalla16: Boolean = false;
  pantalla17: Boolean = false;
  pantalla18: Boolean = false; 
  pantalla19: Boolean = false; 
  pantalla20: Boolean = false; //TO DO
  pantalla21: Boolean = false;
  pantalla22: Boolean = false;
  pantalla23: Boolean = false;

  getPantalla(pantalla: Number): Boolean
  {
    switch (pantalla) 
    {
      case 0:

        return this.pantalla0;

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

      case 22:

        return this.pantalla22;

      case 23:

        return this.pantalla23;

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

      case 22:

        this.pantalla22 = true;
        break;

      case 23:

        this.pantalla23 = true;
        break;

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

      case 22:

        this.pantalla22 = false;
        break;

      case 23:

        this.pantalla23 = false;
        break;

      default:

        break;
    }
  } 

}
