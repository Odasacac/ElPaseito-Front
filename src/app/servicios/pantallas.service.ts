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

  prepararPantalla(pantalla: number): Boolean
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

  pantallas: boolean[] = new Array(1000).fill(false);

  getPantalla(pantalla: number): Boolean
  {
    return this.pantallas[pantalla];
  }

  setPantalla(pantalla: number): void 
  {
    this.setPantallaActiva(pantalla);
    this.pantallas[pantalla] = true;
   
  }

  resetPantalla(pantalla: number): void 
  {
    this.pantallas[pantalla] = false;
  } 

}
