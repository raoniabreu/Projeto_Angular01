import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-aluno',
  templateUrl: './formulario-aluno.component.html',
  styleUrls: ['./formulario-aluno.component.css']
})
export class FormularioAlunoComponent implements OnInit {
  aluno = {
    nome: '',
    idade: null,
    curso: '',
    periodo: ''
  };

  alunoSelecionado: any = null;

  constructor(private alunoService: AlunoService, private router: Router) {}

  ngOnInit() {
    this.alunoSelecionado = this.alunoService.getAlunoSelecionado();

    if (this.alunoSelecionado) {
      this.aluno = { ...this.alunoSelecionado };
    }
  }

  salvar() {
    if (this.alunoSelecionado) {
      this.alunoService.atualizarAluno(this.alunoSelecionado, this.aluno);
    } else {
      this.alunoService.adicionarAluno(this.aluno);
    }

    this.router.navigate(['/lista']);
  }

  voltar() {
    this.router.navigate(['/lista']);
  }
}
