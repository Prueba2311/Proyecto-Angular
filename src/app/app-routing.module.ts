import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaPersonasComponent} from './componentes/lista-personas/lista-personas.component';
import {VerPersonaComponent} from './componentes/ver-persona/ver-persona.component';
import {ListarTagsComponent} from './componentes/listar-tags/listar-tags.component';
import {VerTagComponent} from './componentes/ver-tag/ver-tag.component';
import {GuardarTagComponent} from './componentes/guardar-tag/guardar-tag.component';



const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'Inicio'},
    {path:'listar-Personas',component:ListaPersonasComponent},
    {path:'VerPersona',component:VerPersonaComponent},
    {path:'listar-Tag',component:ListarTagsComponent},
    {path:'VerTag',component:VerTagComponent},
    {path:'AgregarRegistroTag',component:GuardarTagComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
