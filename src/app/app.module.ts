import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AlunosListaComponent } from './pages/alunos-lista/alunos-lista.component';
import { AlunosFormComponent } from './pages/alunos-form/alunos-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppComponent,
    AlunosListaComponent,
    AlunosFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
