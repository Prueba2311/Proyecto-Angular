import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './Persona';
import { tag } from './Tag';



@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //Produccion
  //API1: string = 'https://lozanodesarrollador.website';
  //Pruebas
  API1: string = 'http://127.0.0.1:8000';
  
  constructor(private clientHttp:HttpClient) { }
    //BuscarRegistr (datosPersona:Persona):Observable<any>{
      //return this.clientHttp.get(this.API, datosPersona);
  //}

  getDato(id: string) {    
    return this.clientHttp.get(this.API1 + "/userId/" + id);
  }

  getDataAll() {
    return this.clientHttp.get(this.API1 + "/users");
  }


  GetTag (id: string){
    return this.clientHttp.get(this.API1 + "/ViewTag/" + id);
  }

  GetTagAll (){
    return this.clientHttp.get(this.API1 + "/ViewRegisteAll");
  }


  GetTagSelectAll (){
    return this.clientHttp.get(this.API1 + "/ViewTagAll");
  }

  GetTagSelectTag2 (id: string){
    return this.clientHttp.get(this.API1 + "/ViewTagAs/" + id);
  }

  GetTagInsertAll (id: string){
    return this.clientHttp.get(this.API1 + "/ViewRegister/" + id);
  }

  CreateTag(DatosTag:tag):Observable<any>{
    return this.clientHttp.post(this.API1 + "/CreateAssocition", DatosTag);
  }

}
