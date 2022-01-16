import { Component, OnInit } from '@angular/core';
import { LenguajesService } from '../services/lenguajes.service';

@Component({
  selector: 'app-modal-project',
  templateUrl: './modal-project.component.html',
  styleUrls: ['./modal-project.component.css']
})
export class ModalProjectComponent implements OnInit {
 
  modal: any = [];

  constructor(
    private lenguajeService: LenguajesService
  ) {
  }
  
  ngOnInit(): void {
    this.modal = this.lenguajeService.proyectoSeleccionado;
    console.log(this.lenguajeService.proyectoSeleccionado);
  }


}
