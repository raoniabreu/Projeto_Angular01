import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos: any[] = [];
  private alunoSelecionado: any = null;

  getAlunos() {
    return this.alunos;
  }

  adicionarAluno(aluno: any) {
    this.alunos.push(aluno);
  }

  excluirAluno(index: number) {
    this.alunos.splice(index, 1);
  }

  selecionarAluno(aluno: any) {
    this.alunoSelecionado = aluno;
  }

  getAlunoSelecionado() {
    return this.alunoSelecionado;
  }

  atualizarAluno(alunoAntigo: any, alunoAtualizado: any) {
    const index = this.alunos.indexOf(alunoAntigo);
    if (index !== -1) {
      this.alunos[index] = alunoAtualizado;
    }
    this.alunoSelecionado = null;
  }
}
