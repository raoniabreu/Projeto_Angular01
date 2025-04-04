import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {
  alunos: any[] = [];
  termoBusca: string = '';

  constructor(
    private alunoService: AlunoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.alunos = this.alunoService.getAlunos();
  }

  filtrarAlunos(): any[] {
    return this.alunos.filter(aluno =>
      aluno.nome.toLowerCase().includes(this.termoBusca.toLowerCase())
    );
  }

  ordenarPorNome(): void {
    this.alunos.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  ordenarPorIdade(): void {
    this.alunos.sort((a, b) => a.idade - b.idade);
  }

  excluirAluno(index: number): void {
    if (confirm('Deseja realmente excluir este aluno?')) {
      this.alunoService.excluirAluno(index);
      this.alunos = this.alunoService.getAlunos();
    }
  }

  irParaCadastro(): void {
    this.router.navigate(['/formulario']);
  }
}
