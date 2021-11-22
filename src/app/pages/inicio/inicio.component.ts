import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LenguajesService } from 'src/app/services/lenguajes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

    public lenguajes = [];
    public proyectos = [];
    public iconoCaja = '../../../assets/img/icons8-javascript-48.png';
    public nombreLenguaje = 'javascript';
  
    constructor(private router: Router, 
                private lenguajesService: LenguajesService
    ) { }
  
    ngOnInit(  ) {
      this.cargaLenguajes();
      this.listarProyecto(1);
    }
    
    cargaLenguajes() {
      this.lenguajesService.getLenguajes().subscribe(resp => {
        this.lenguajes = resp;
        console.log(resp);
      });
    }

    listarProyecto(id: number ){
      this.lenguajesService.getLenguajes().subscribe(resp => {

        let lenguajeSeleccionado = resp.filter(proyecto => proyecto.id == id);

        this.iconoCaja = lenguajeSeleccionado[0].imagen;
        this.nombreLenguaje = lenguajeSeleccionado[0].nombre;
        this.proyectos = lenguajeSeleccionado[0].proyectos;

      });
    }
      
}
