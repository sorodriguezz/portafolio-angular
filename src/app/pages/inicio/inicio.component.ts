import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LenguajesService } from 'src/app/services/lenguajes.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalProjectComponent } from 'src/app/modal-project/modal-project.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public lenguajes = [];
  public proyectos = [];
  public iconoCaja = '';
  public nombreLenguaje = 'javascript';
  public cantidadProyectos: any = 0;

  constructor(
    private router: Router, 
    private lenguajesService: LenguajesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(  ) {
    this.cargaLenguajes();
    this.listarProyecto(1);
  }
  
  cargaLenguajes() {
    this.lenguajesService.getLenguajes().subscribe(resp => {
      this.lenguajes = resp;
    });
  }

  listarProyecto(id: number ){
    this.lenguajesService.getLenguajes().subscribe(resp => {

      let lenguajeSeleccionado = resp.filter(proyecto => proyecto.id == id);

      this.cantidadProyectos = lenguajeSeleccionado[0].proyectos.length;

      this.iconoCaja = lenguajeSeleccionado[0].imagen;
      this.nombreLenguaje = lenguajeSeleccionado[0].nombre;
      this.proyectos = lenguajeSeleccionado[0].proyectos;

    });
  }

  abrirModal( proyecto: any ) {
    const dialogRef = this.dialog.open(ModalProjectComponent);

    this.lenguajesService.proyectoSeleccionado = proyecto;

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
      
}
