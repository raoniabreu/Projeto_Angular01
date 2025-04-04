import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { FormularioAlunoComponent } from './formulario-aluno/formulario-aluno.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: ListaAlunosComponent },
  { path: 'formulario', component: FormularioAlunoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
