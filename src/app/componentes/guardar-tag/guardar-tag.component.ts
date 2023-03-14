import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/servicios/crud.service';




@Component({
  selector: 'app-guardar-tag',
  templateUrl: './guardar-tag.component.html',
  styleUrls: ['./guardar-tag.component.css']
})

export class GuardarTagComponent implements OnInit {
  Tags: any;
  Tags1: any;
  Tags2: any;
  Tags3: any;
  Tags4: any;
  TagsFiltro: any[] = [];
  TagsFiltro1: any[] = [];
  TagsFiltro2: any[] = [];
  TagFiltroDepurado: any[] = [];
  selectedOption1: string = '';
  selectedOption2: string = '';
  selectedOption3: string = '';
  selectedOption4: string = '';
  vez: number = 0;
  vez1: number = 0;
  vez2: number = 0;
  nombre1:any;
  nombre2:any;
  nombre3:any;
  nombre4:any;
  public formularioTag: FormGroup;

  constructor(private CrudService: CrudService, public formulario: FormBuilder) {
    this.formularioTag = this.formulario.group({
      id: [''],
      Tag1: [''],
      Tag2: [''],
      Tag3: [''],
      Tag4: ['']
    });
  }

  onSelectOption(selectedOption1: string) {

    if (!!selectedOption1 && this.vez == 0) {
      let insertar = 0;
      let contador = 0;
      // para traer el nombre
      this.CrudService.GetTag(this.formularioTag.value.Tag1).subscribe(respuesta1 => {
        this.nombre1 = respuesta1;
        console.log(this.nombre1);
      });
      
      this.CrudService.GetTagSelectTag2(selectedOption1).subscribe(respuesta => {
        this.vez = 1;
        this.Tags2 = respuesta;
        for (let i = 1; i < this.Tags2.length; i++) {
          this.CrudService.GetTag(this.Tags2[i][2]).subscribe(respuesta1 => {
            //RECORRIDO DE TAGFILTRO                            
            this.TagsFiltro.forEach(element => {
              //console.log(element);                    
              //console.log("comparativo" + this.Tags2[i][2] + " " + element[0]);
              if (this.Tags2[i][2] === element[0]) {
                //console.log("registro duplicado");
                //console.log(this.Tags2[i][2]);
                insertar = 1;
              } else {
                insertar = 0;
              }
              contador++;
            });
            if (insertar === 0 && contador === this.TagsFiltro.length) {
              //console.log("inserto: " + [this.Tags2[i][2], respuesta1]);
              this.TagsFiltro.push([this.Tags2[i][2], respuesta1]);
            }
          });
        }
      });
    }
  }


  onSelectOption1(selectedOption2: string) {
    if (!!selectedOption2 || this.vez1 == 0) {
      let insertar = 0;
      let contador = 0;
      let concatenar = this.selectedOption1 + "," + selectedOption2;

      this.CrudService.GetTag(this.formularioTag.value.Tag2).subscribe(respuesta2 => {
        this.nombre2 = respuesta2;
        console.log(this.nombre2);
      });
        
      // Realiza la consulta de los tags asociation para poder comparar y traer 
      this.CrudService.GetTagSelectTag2(concatenar).subscribe(respuesta => {
        this.vez2 == 1;
        this.Tags2 = respuesta;
        for (let i = 1; i < this.Tags2.length; i++) {
          this.CrudService.GetTag(this.Tags2[i][3]).subscribe(respuesta1 => {
            //RECORRIDO DE TAGFILTRO                            
            this.TagsFiltro1.forEach(element => {
              //console.log(element);                    
              console.log("comparativo" + this.Tags2[i][3] + " " + element[0]);
              if (this.Tags2[i][3] === element[0]) {
                console.log("registro duplicado");
                //console.log(this.Tags2[i][2]);
                insertar = 1;
              } else {
                insertar = 0;
              }
              contador++;
            });
            if (insertar === 0 && contador === this.TagsFiltro1.length) {
              console.log("inserto: " + [this.Tags2[i][3], respuesta1]);
              this.TagsFiltro1.push([this.Tags2[i][3], respuesta1]);
            }
          });
        }
      });
    }
  }

  onSelectOption2(selectedOption3: string) {
    if (!!selectedOption3 || this.vez2 == 0) {
      let insertar = 0;
      let contador = 0;

      this.CrudService.GetTag(this.formularioTag.value.Tag3).subscribe(respuesta3 => {
        this.nombre3 = respuesta3;
        console.log(this.nombre3);
      });
  
      
      let concatenar = this.selectedOption1 + "," + this.selectedOption2 + "," + selectedOption3;
      // Realiza la consulta de los tags asociation para poder comparar y traer       
      this.CrudService.GetTagSelectTag2(concatenar).subscribe(respuesta => {
        this.Tags2 = respuesta;
        for (let i = 1; i < this.Tags2.length; i++) {
          this.CrudService.GetTag(this.Tags2[i][4]).subscribe(respuesta1 => {
            //RECORRIDO DE TAGFILTRO                            
            this.TagsFiltro2.forEach(element => {
              //console.log(element);                    
              console.log("comparativo" + this.Tags2[i][4] + " " + element[0]);
              if (this.Tags2[i][4] === element[0]) {
                console.log("registro duplicado");
                //console.log(this.Tags2[i][2]);
                insertar = 1;
              } else {
                insertar = 0;
              }
              contador++;
            });
            if (insertar === 0 && contador === this.TagsFiltro2.length) {
              console.log("inserto: " + [this.Tags2[i][4], respuesta1]);
              this.TagsFiltro2.push([this.Tags2[i][4], respuesta1]);
            }
          });
        }
      });
    }
  }

  onSelectOption3(selectedOption3: string) {    
      this.CrudService.GetTag(this.formularioTag.value.Tag4).subscribe(respuesta3 => {
        this.nombre4 = respuesta3;
        console.log(this.nombre4);
      });            
  }




  EnviarDatos(): any {

    // this.CrudService.GetTag(this.formularioTag.value.Tag4).subscribe(respuesta4 => {
    //   this.nombre4 = respuesta4;
    //   console.log(this.nombre4);
    // });

    //Valida que vengan todos los campos    
    if (this.formularioTag.value.Tag1 == this.formularioTag.value.Tag2) {
      console.log('Los valores de los selects son iguales 1');
      return;
    }

    if (this.formularioTag.value.Tag1 == this.formularioTag.value.Tag3) {
      console.log('Los valores de los selects son iguales 2');
      return;
    }

    if (this.formularioTag.value.Tag1 == this.formularioTag.value.Tag4) {
      console.log('Los valores de los selects son iguales 3');
      return;
    }

    if (this.formularioTag.value.Tag2 == this.formularioTag.value.Tag3) {
      console.log('Los valores de los selects son iguales 4');
      return;
    }

    if (this.formularioTag.value.Tag2 == this.formularioTag.value.Tag4) {
      console.log('Los valores de los selects son iguales 5');
      return;
    }

    if (this.formularioTag.value.Tag3 == this.formularioTag.value.Tag4) {
      console.log('Los valores de los selects son iguales 6');
      return;
    }
    //this.sendDataToAPI();
      
    if (!!this.nombre1) {
      //this.Tags1 = [this.formularioTag.value.id,this.formularioTag.value.Tag1,this.formularioTag.value.Tag2,this.formularioTag.value.Tag3,this.formularioTag.value.Tag4];
      this.Tags1 = [this.formularioTag.value.id,this.nombre1,this.nombre2,this.nombre3,this.nombre4];    
    }
    
  }

  ngOnInit(): void {
    this.CrudService.GetTagSelectAll().subscribe(respuesta => {
      this.Tags = respuesta;
    });
  }
  sendDataToAPI() {
    this.CrudService.CreateTag(this.formularioTag.value).subscribe(response => {
      const id = this.formularioTag.value.id;
      this.CrudService.GetTagInsertAll(id).subscribe(respuesta => {
        console.log(respuesta);
        this.Tags1 = respuesta;
        if (this.Tags1 === null) {

        } else {

        }
      });
    });
  }


}         
