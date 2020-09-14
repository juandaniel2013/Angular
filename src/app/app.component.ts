import { Component } from '@angular/core';

import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  mostrar_videojuegos: boolean = true;
  descripcion: string;
  config: any;

  constructor(){
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

  cambiarEstado(value){
    this.mostrar_videojuegos = value;
  }
}
