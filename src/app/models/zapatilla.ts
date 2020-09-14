export class Zapatilla{
    
    nombre: string;
    marca: string;
    color: string;
    precio: number;
    stock: boolean;

    constructor(nombre: string, marca: string, color: string, precio: number, stock: boolean){
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }
    
    //Esto hace lo mismo que todo el código de arriba
    /*constructor(public nombre: string, public marca: string, public color: string, 
                public precio: number, public stock: boolean){

    }*/
}