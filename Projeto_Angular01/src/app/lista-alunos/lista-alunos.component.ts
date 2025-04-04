import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {
  alunos = this.alunoService.getAlunos();
  termoBusca = '';

  constructor(private alunoService: AlunoService, private router: Router) {}

  filtrarAlunos() {
    return this.alunos.filter(aluno =>
      aluno.nome.toLowerCase().includes(this.termoBusca.toLowerCase())
    );
  }

  ordenarPorNome() {
    this.alunos.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  ordenarPorIdade() {
    this.alunos.sort((a, b) => a.idade - b.idade);
  }

  excluirAluno(index: number) {
    if (confirm('Deseja realmente excluir este aluno?')) {
      this.alunoService.excluirAluno(index);
    }
  }

  irParaCadastro() {
    this.router.navigate(['/formulario']);
  }
}
