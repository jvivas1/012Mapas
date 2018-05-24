import { Component } from '@angular/core';
import {MapasService} from './services/mapas.service';
import {Marcador} from './interfaces/marcador.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 18.868687;
  lng: number = -98.949673;
  zoom:number=15;


  marcadorSel:any=null;
  draggable:string="1";

  constructor(public _ms:MapasService){
    this._ms.cargarMarcadores();
  }

  cambiarDraggable(){
    if(this.draggable==="1")
    {
      this.marcadorSel.draggable=true;
    }
    {
      this.marcadorSel.draggable=false;
    }
  }

  clickMapa(evento){
    let nuevoMarcador:Marcador={
      lat:evento.coords.lat,
      lng:evento.coords.lng,
      titulo:"Sin titulo",
      draggable:true
    }


    this._ms.insertarMarcador(nuevoMarcador);
  }

  clickMarcador(marcador:Marcador,i:number){
    this.marcadorSel=marcador;

    if(this.marcadorSel.draggable)
    {
      this.draggable="1";
    }
    else{
      this.draggable="0";
    }
  }

  dragEndMarcador(marcador:Marcador,evento){
    let lat=evento.coords.lat;
    let lng=evento.coords.lng;

    marcador.lat=lat;
    marcador.lng=lng;
    this._ms.guardarMarcadores();
  }

}
