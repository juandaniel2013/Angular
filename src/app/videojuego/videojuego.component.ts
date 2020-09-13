import { Component } from '@angular/core';

@Component({
    selector: 'videojuego',
    template: `
        <h2>Componente de Videojuegos</h2>
        <ul>
            <li>GTA</li>
            <li>Soldiers</li>
            <li>Need for Speed</li>
        </ul>
    `
})

export class VideojuegoComponent{
    constructor(){
        console.log("Se ha cargado el componente videojuego.ts");
    }
}