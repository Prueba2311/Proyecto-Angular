import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-guardar-tag',
  templateUrl: './guardar-tag.component.html',
  styleUrls: ['./guardar-tag.component.css']
})

export class GuardarTagComponent implements OnInit{    
  Tags: any;
  selectedValue: string = "";  
  
  constructor(private CrudService: CrudService) {
  }
    

  ngOnInit(): void {
    this.CrudService.GetTagSelectAll().subscribe(respuesta => {
      this.Tags = respuesta;            
        });        
      }                  
        onSelectedValueChange() {                               
        }
      }    
