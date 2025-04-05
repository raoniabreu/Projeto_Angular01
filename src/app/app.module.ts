import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Importação correta aqui

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlunosListaComponent } from './pages/alunos-lista/alunos-lista.component';
import { AlunosFormComponent } from './pages/alunos-form/alunos-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunosListaComponent,
    AlunosFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Adicionado aqui nos imports
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
