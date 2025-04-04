import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  alunos = [
    { nome: 'João Silva', idade: 20, curso: 'Engenharia', periodo: 'Noturno' },
    { nome: 'Maria Souza', idade: 22, curso: 'Medicina', periodo: 'Integral' }
  ];

  getAlunos() {
    return this.alunos;
  }

  adicionarAluno(aluno: any) {
    this.alunos.push(aluno);
  }

  excluirAluno(index: number) {
    this.alunos.splice(index, 1);
  }
}
