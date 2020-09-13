import { Component } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent{

    titulo: string;
    listado: string;

    constructor(){
        this.titulo = "* Componente de Videojuegos";
        this.listado = "* Listado de Juegos Populares";
        console.log("Se ha cargado el componente videojuego.ts");
    }
}