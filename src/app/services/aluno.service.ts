// src/app/services/aluno.service.ts
import { Injectable } from '@angular/core';

export interface Aluno {
  id: number;
  nome: string;
  idade: number;
}

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private alunos: Aluno[] = [
    { id: 1, nome: 'João Silva', idade: 20 },
    { id: 2, nome: 'Maria Souza', idade: 22 },
  ];
  private proximoId = 3;

  getAlunos(): Aluno[] {
    return [...this.alunos];
  }

  getAlunoPorId(id: number): Aluno | undefined {
    return this.alunos.find(aluno => aluno.id === id);
  }

  adicionarAluno(aluno: Aluno) {
    aluno.id = this.proximoId++;
    this.alunos.push(aluno);
  }

  atualizarAluno(aluno: Aluno) {
    const index = this.alunos.findIndex(a => a.id === aluno.id);
    if (index !== -1) {
      this.alunos[index] = aluno;
    }
  }

  excluirAluno(id: number) {
    this.alunos = this.alunos.filter(a => a.id !== id);
  }
}
