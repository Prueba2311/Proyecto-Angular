import { Component } from '@angular/core';
import{FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CrudService } from 'src/app/servicios/crud.service';


@Component({
  selector: 'app-ver-persona',
  templateUrl: './ver-persona.component.html',
  styleUrls: ['./ver-persona.component.css']
})

export class VerPersonaComponent {
  Personas1:any;
  myForm: FormGroup;

  constructor(private fb: FormBuilder,private CrudService:CrudService) {
    this.myForm = this.fb.group({
      id: ['', Validators.required]
    });
  }

  onSubmit() {
    const id = this.myForm.value.id;
    this.CrudService.getDato(id).subscribe(respuesta => {
      console.log(respuesta);
      this.Personas1 = respuesta;
    });    
  }
}

