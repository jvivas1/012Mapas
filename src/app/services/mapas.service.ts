import { Injectable } from '@angular/core';
import {Marcador} from '../interfaces/marcador.interface'
@Injectable()
export class MapasService {

  marcadores:any[]=[];

  constructor() {
  let nuevoMarcador:Marcador={
    lat:18.868687,
    lng:-98.949673,
    titulo:'Plaza Atrios',
    draggable:true
  }

  this.marcadores.push(nuevoMarcador);
  }

  insertarMarcador(marcador:Marcador){
    this.marcadores.push(marcador);
    this.guardarMarcadores();
  }

  borrarMarcador(idx:number)
  {
    this.marcadores.splice(idx,1);
    this.guardarMarcadores();
  }

  cargarMarcadores(){
    if(localStorage.getItem('marcadores'))
    {
      this.marcadores=JSON.parse(localStorage.getItem('marcadores'));
    }
    else{

      this.marcadores=[];
    }
  }

  guardarMarcadores(){
    localStorage.setItem('marcadores',JSON.stringify(this.marcadores));
  }

}
