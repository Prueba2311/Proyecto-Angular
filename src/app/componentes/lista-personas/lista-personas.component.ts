import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';


@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit{
  Personas:any;

  constructor (private CrudService:CrudService){
  }

  ngOnInit():void{
    this.CrudService.getDataAll().subscribe(respuesta => {
      this.Personas = respuesta;
    });
  }
}
