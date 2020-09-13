import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{

    titulo: string;
    listado: string;

    constructor(){
        this.titulo = "* Componente de Videojuegos";
        this.listado = "* Listado de Juegos Populares";
        console.log("Constructor: Se ha cargado el componente videojuego.ts");
    }

    ngOnInit(){
        console.log("OnInit ejecutado");
    }

    ngDoCheck(){
        console.log("DoCheck ejecutado: esto se ejecuta cada vez que se hace un cambio");
    }

    cambiarTitulo(){
        this.titulo = "Nuevo título del componente";
    }

    ngOnDestroy(){
        console.log("OnDestroy ejecutado: se ejecuta cuando se elimina");
    }
}