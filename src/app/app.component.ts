import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Master de JavaScript y Angular';
  mostrar_videojuegos: boolean = true;

  cambiarEstado(value){
    this.mostrar_videojuegos = value;
  }
}
