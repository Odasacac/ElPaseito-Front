import { inject, Injectable } from '@angular/core';
import { ParaNuevoPersonaje } from '../interfaces/paraNuevoPersonaje';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ParaContinuar } from '../interfaces/paraContinuar';
import { NuevoPersonaje } from '../interfaces/NuevoPersonaje';

@Injectable({
  providedIn: 'root'
})
export class ApiService 
{
  private http = inject(HttpClient);
  private base_url: string = "http://localhost:8080/";
  
  guardarNuevoPersonaje(nuevoPersonaje: ParaNuevoPersonaje):Observable<any>
  {
    const endpoint = this.base_url + "personajes/guardarnuevo";
    return this.http.post<any>(endpoint, nuevoPersonaje);
  }

  continuarPersonaje(nuevoPersonaje: ParaContinuar):Observable<any>
  {
    const endpoint = this.base_url + "personajes/recuperar";
    return this.http.post<any>(endpoint, nuevoPersonaje);
  }

  guardarProgreso(personaje: NuevoPersonaje): Observable<any>
  {
    const endpoint = this.base_url + "personajes/guardar";
    return this.http.post<any>(endpoint, personaje);
  }

}
