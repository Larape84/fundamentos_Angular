import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})




export class ListadoComponent {


heroes:string[] =["Spiderman","Ironman","Hulk","Tor","Goku"]

heroeborrados:string="";

borrarHeroe():void{
console.log("borrando...");

this.heroeborrados= this.heroes.shift() || "";


}

}
