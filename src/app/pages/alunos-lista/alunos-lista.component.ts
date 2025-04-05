import { Component, OnInit } from '@angular/core';
import { AlunoService, Aluno } from '../../services/aluno.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos-lista',
  templateUrl: './alunos-lista.component.html',
})
export class AlunosListaComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService, private router: Router) {}

  ngOnInit() {
    console.log("AlunosListaComponent carregado!");
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
