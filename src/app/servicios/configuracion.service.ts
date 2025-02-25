import { inject, Injectable } from '@angular/core';
import { Campo } from '../interfaces/campos';
import { NuevoPersonaje } from '../interfaces/NuevoPersonaje';
import { PersonajeService } from './personaje.service';
import { PantallasService } from './pantallas.service';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService 
{

  personajeService = inject(PersonajeService); 
  pantallasService = inject(PantallasService); 
  camposMiedo: Campo[] = [];
  camposOlvido: Campo[] = [];

  generarConfiguracion()
  {
    const CamposMiedo: Campo[] =
    [
      { id: 1, valor: 'Al dolor' },
      { id: 2, valor: 'Al fracaso' },
      { id: 3, valor: 'A la soledad' },
      { id: 4, valor: 'A lo desconocido' },
    ]; 
    this.setCamposMiedo(CamposMiedo);

    const CamposOlvido: Campo[] =      
    [
      { id: 1, valor: 'Los nombres' },
      { id: 2, valor: 'Las promesas' },
      { id: 3, valor: 'Los compromisos' },
      { id: 4, valor: 'Las fechas importantes' },
    ];
    this.setCamposOlvido(CamposOlvido);
  }




  getCamposMiedo(): Campo[] 
  {
    return this.camposMiedo;
  }
  
  setCamposMiedo(campos: Campo[]): void 
  {
    this.camposMiedo = campos;
  }
  
  getCamposOlvido(): Campo[] 
  {
    return this.camposOlvido;
  }
  
  setCamposOlvido(campos: Campo[]): void 
  {
    this.camposOlvido = campos;
  }


  generarPersonajeMaster()
  {
    const master: NuevoPersonaje =
    {
      nombre: "CarlosCA",
      miedo: 0,
      olvido: 0,
      suerte: 0,
      nivelDeMiedo: 0,
      nivelDeTranquilidad: 0,
      impactos: 0,
      master: true,
      capitulo: 0,
      exploracion: 0
    }
    this.personajeService.setPersonaje(master);

  }

}
