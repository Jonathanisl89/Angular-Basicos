import { Component } from "@angular/core";

@Component({
    selector: 'app-contador', //Este nombre es el que se llama al HTML principal, para mostrarlo en la página
    template: `
        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong> {{ base }} </strong></h3>

        <button (click)="acumular(+ base)"> + {{ base }} </button>
        <span> {{ numero }} </span>
        <button (click)="acumular(- base)"> - {{ base }} </button>
    `
})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    acumular(valor: number){
        this.numero += valor;
    }
}