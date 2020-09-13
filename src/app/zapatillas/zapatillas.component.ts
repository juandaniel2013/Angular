import { importType } from "@angular/compiler/src/output/output_ast";

import { Component } from '@angular/core';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent{
    titulo: string = "Componente de Zapatillas";

}