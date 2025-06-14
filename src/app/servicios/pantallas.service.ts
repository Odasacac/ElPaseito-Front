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


            





            
      //----------------

      default:

        break;
    }
  } 

}
