import { Routes } from '@angular/router';
import { AlunosListaComponent } from './pages/alunos-lista/alunos-lista.component';
import { AlunosFormComponent } from './pages/alunos-form/alunos-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'alunos', pathMatch: 'full' },
  { path: 'alunos', component: AlunosListaComponent },
  { path: 'alunos/novo', component: AlunosFormComponent },
  { path: 'alunos/editar/:id', component: AlunosFormComponent },
];
