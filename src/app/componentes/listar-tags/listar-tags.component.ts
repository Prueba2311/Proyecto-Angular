import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-listar-tags',
  templateUrl: './listar-tags.component.html',
  styleUrls: ['./listar-tags.component.css']
})
export class ListarTagsComponent implements OnInit {
  Tags: any;

  constructor(private CrudService: CrudService) {
  }

  ngOnInit(): void {
    this.CrudService.GetTagAll().subscribe(respuesta => {
      this.Tags = respuesta;      
      for (let i = 1; i < this.Tags.length; i++) {
        this.Tags[i] = this.Tags[i].replace(",", "");        
        this.CrudService.GetTag(this.Tags[i]).subscribe(respuesta1 =>{          
        this.Tags[i] = respuesta1;         
        console.log(this.Tags);
        });        
      }
    });
  }
}
