import { importType } from "@angular/compiler/src/output/output_ast";

import { Component, OnInit } from '@angular/core';
//para retroceder al directorio anterior hacer ../
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    titulo: string = "Componente de Zapatillas";
    zapatillas: Array<Zapatilla>;
    
    constructor(){
        this.zapatillas = [
            new Zapatilla("Tor", "Nike", "White", 125.6, true),
            new Zapatilla("Bos", "Adidas", "Blue", 155.4, false),
            new Zapatilla("Bota", "Night", "Coffee", 115.4, true)
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);
    }
}