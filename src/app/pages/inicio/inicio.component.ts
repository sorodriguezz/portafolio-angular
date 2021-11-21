import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public title: string = "";
  public iconTitle: string = "";

  public existenProyectosJS: boolean = false;
  public existenProyectosPHP: boolean = false;
  public existenProyectosTS: boolean = false;
  public existenProyectosSASS: boolean = false;
  public existenProyectosJAVA: boolean = false;
  public existenProyectosKOTLIN: boolean = false;
  public existenProyectosPYTHON: boolean = false;
  public existenProyectosGO: boolean = false;
  public existenProyectosRUBY: boolean = false;
  public existenProyectosCPLUSPLUS: boolean = false;
  public existenProyectosC: boolean = false;
  public existenProyectosSQL: boolean = false;
  public existenProyectosCSS: boolean = false;
  public existenProyectosHTML: boolean = false;
  public existenProyectosCSHARP: boolean = false;
  public existenProyectosDART: boolean = false;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.javascript();
  }

  javascript(){
    this.title = "JAVASCRIPT";
    this.iconTitle = "../../../assets/img/icons8-javascript-48.png";
    console.log("javascript");
  }

  php() {
    this.title = "PHP";
    this.iconTitle = "../../../assets/img/icons8-logo-php-40.png";
    console.log("php");
  }

  typescript() {
    this.title = "TypeScript";
    this.iconTitle = "../../../assets/img/icons8-typescript-48.png";
    console.log("typescript");
  }

  sass(){
    this.title = "SASS";
    this.iconTitle = "../../../assets/img/icons8-sass-48.png";
    console.log("sass");
  }

  java(){
    this.title = "JAVA";
    this.iconTitle = "../../../assets/img/icons8-logotipo-de-java-coffee-cup-48.png";
    console.log("java");
  }

  kotlin(){
    this.title = "KOTLIN";
    this.iconTitle = "../../../assets/img/icons8-kotlin-48.png";
    console.log("kotlin");
  }

  python(){
    this.title = "PYTHON";
    this.iconTitle = "../../../assets/img/icons8-python-48.png";
    console.log("python");
  }

  goland(){
    this.title = "GOLAND";
    this.iconTitle = "../../../assets/img/icons8-golang-48.png";
    console.log("goland");
  }

  ruby(){
    this.title = "RUBY";
    this.iconTitle = "../../../assets/img/icons8-rubí-lenguaje-de-programación-48.png";
    console.log("ruby");
  }

  cplusplus(){
    this.title = "C++";
    this.iconTitle = "../../../assets/img/icons8-logotipo-de-c-plus-plus-48.png";
    console.log("cplusplus");
  }

  c(){
    this.title = "C";
    this.iconTitle = "../../../assets/img/icons8-c-programación-48.png";
    console.log("c");
  }

  sql(){
    this.title = "SQL";
    this.iconTitle = "../../../assets/img/icons8-sql-48.png";
    console.log("sql");
  }

  css(){
    this.title = "CSS";
    this.iconTitle = "../../../assets/img/icons8-css3-48.png";
    console.log("css");
  }

  html(){
    this.title = "HTML";
    this.iconTitle = "../../../assets/img/icons8-html-5-48.png";
    console.log("html");
  }

  csharp(){
    this.title = "C#";
    this.iconTitle = "../../../assets/img/icons8-c-sharp-logotipo-48.png";
    console.log("csharp");
  }

  dart(){
    this.title = "DART";
    this.iconTitle = "../../../assets/img/icons8-dart-48.png";
    console.log("dart");
  }

}
