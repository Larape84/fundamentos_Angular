import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`
    
    <h1>{{title}}</h1>


<br>

<button (click)="operacion(base)">+{{base}}</button> 

<button (click)="operacion(-base)">-{{base}}</button>

<h1>{{numero}}</h1>
    




    
    `
    
    
    
    
    
    
    
    
    


})


export class ContadorComponent{

    public  title :string = 'Contador App';

 numero:number = 0;

 base:number=5;

 operacion(valor:number){

  this.numero=this.numero+valor;
 }
 
 







}