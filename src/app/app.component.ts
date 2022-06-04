import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  nombre: String = "";
  cif: String = "";
  direccion: String = "";
  grupo: String = "";
  arrayCliente:any = [];
  //arrayCrearCliente:any = [];


  save(){
   let arrayCrearCliente = [this.nombre,this.cif,this.direccion,this.grupo]

    this.arrayCliente.push(arrayCrearCliente); //añadir otro valor

  }
 
  
}
