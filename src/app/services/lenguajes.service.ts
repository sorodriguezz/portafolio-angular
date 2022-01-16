import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {lenguajes} from '../dataTemp/dataLenguajes'

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  public proyectoSeleccionado: any;

  constructor() {
    
  }

  getLenguajes() {
    return of(lenguajes);
  }

}
