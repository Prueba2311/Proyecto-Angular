import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './Persona';



@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API1: string = 'http://127.0.0.1:8000/users';
  API2: string = 'http://127.0.0.1:8000/';

  constructor(private clientHttp:HttpClient) { }
    //BuscarRegistr (datosPersona:Persona):Observable<any>{
      //return this.clientHttp.get(this.API, datosPersona);
  //}

  getDato(id: string) {
    this.API1 = 'http://127.0.0.1:8000/userId';
    return this.clientHttp.get(this.API1 + "/" + id);
  }

  getDataAll() {
    return this.clientHttp.get(this.API1);
  }


  GetTag (id: string){
    return this.clientHttp.get(this.API2 + "ViewTag/" + id);
  }

  GetTagAll (){
    return this.clientHttp.get(this.API2 + "ViewRegisteAll");
  }


  GetTagSelectAll (){
    return this.clientHttp.get(this.API2 + "ViewTagAll");
  }

  CreateTag(){

  }


}
