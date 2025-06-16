import { Injectable} from '@angular/core';
import { NuevoPersonaje } from '../interfaces/NuevoPersonaje';
import { Inventario } from '../interfaces/Inventario';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService 
{
  personaje: NuevoPersonaje =
  (
    {
      nombre: "",
      miedo: 0,
      olvido: 0,
      suerte: 0,
      nivelDeMiedo: 0,
      nivelDeTranquilidad: 0,
      impactos: 0,
      master: false,
      capitulo: 1,
      exploracion: 0
    }
  )
  

  inventario: Inventario =
  (
    {
      botellaPlaya: 0 
    }
  )

  getEstadoBotellaPlaya(): number
  {
    return this.inventario.botellaPlaya;
  }

  setEstadoBotellaPlaya (estado: number)
  {
    this.inventario.botellaPlaya = estado;
  }

  getCapitulo(): number
  {
    return this.personaje.capitulo;
  }

  setCapitulo(capitulo: number)
  {
    this.personaje.capitulo=capitulo
  }

  getExploracion(): number
  {
    return this.personaje.exploracion
  }

  aumentarExploracion(exploracion: number)
  {
    this.personaje.exploracion=this.personaje.exploracion + exploracion
  }

  setPersonaje(personaje: NuevoPersonaje)
  {
    this.personaje=personaje;
  }

  getPersonaje(): NuevoPersonaje
  {
    return this.personaje;
  }

  getMaster(): boolean
  {
    return this.personaje.master;
  }

  getNombre(): String
  {
    return this.personaje.nombre;
  }

  getOlvido(): number 
  {
    return this.personaje.olvido;
  }

  getmiedo(): number 
  {
    return this.personaje.miedo;
  }

  getSuerte(): number 
  {
    return this.personaje.suerte;
  }

  getNivelDeMiedo(): number 
  {
    return this.personaje.nivelDeMiedo;
  }

  getNivelDeTranquilidad(): number 
  {
    return this.personaje.nivelDeTranquilidad;
  }

  getNumeroDeImpactos(): number
  {
    return this.personaje.impactos;
  }

  setMiedo(valor: number)
  {
    for (let i = 0; i<valor; i++)
    {
      if (this.getNivelDeTranquilidad() <= 0)
      {
        this.personaje.nivelDeMiedo = this.personaje.nivelDeMiedo +1
      }
      else
      {
        this.personaje.nivelDeTranquilidad = this.personaje.nivelDeTranquilidad -1;
      }
    }
  }

  setTranquilidad(valor: number)
  {
    for (let i = 0; i<valor; i++)
    {
      if (this.getNivelDeMiedo() <= 0)
      {
        this.personaje.nivelDeTranquilidad = this.personaje.nivelDeTranquilidad +1
      }
      else
      {
        this.personaje.nivelDeMiedo = this.personaje.nivelDeMiedo -1;
      }
    }
  }

  aumentarImpactos()
  {
      this.personaje.impactos = this.personaje.impactos+1;
  }

}
