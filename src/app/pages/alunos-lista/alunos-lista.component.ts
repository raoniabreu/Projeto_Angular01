import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <- necessário para *ngFor
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { AlunoService, Aluno } from '../../services/aluno.service';

@Component({
  selector: 'app-alunos-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './alunos-lista.component.html',
})
export class AlunosListaComponent {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService, private router: Router) {}

  ngOnInit() {
    this.alunos = this.alunoService.getAlunos();
  }

  editar(id: number) {
    this.router.navigate(['/alunos/editar', id]);
  }

  excluir(id: number) {
    this.alunoService.excluirAluno(id);
    this.alunos = this.alunoService.getAlunos();
  }

  novo() {
    this.router.navigate(['/alunos/novo']);
  }
}
