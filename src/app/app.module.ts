import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonasComponent } from './componentes/lista-personas/lista-personas.component';
import { VerPersonaComponent } from './componentes/ver-persona/ver-persona.component';
import { VerTagComponent } from './componentes/ver-tag/ver-tag.component';
import { ListarTagsComponent } from './componentes/listar-tags/listar-tags.component';
import { GuardarTagComponent } from './componentes/guardar-tag/guardar-tag.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    VerPersonaComponent,
    VerTagComponent,
    ListarTagsComponent,
    GuardarTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
