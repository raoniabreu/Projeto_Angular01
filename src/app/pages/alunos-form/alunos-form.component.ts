import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService, Aluno } from '../../services/aluno.service';


@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
})
export class AlunosFormComponent implements OnInit {
  aluno: Aluno = { id: 0, nome: '', idade: 0 };
  editando = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const encontrado = this.alunoService.getAlunoPorId(id);
      if (encontrado) {
        this.aluno = { ...encontrado };
        this.editando = true;
      }
    }
  }

  salvar() {
    if (this.editando) {
      this.alunoService.atualizarAluno(this.aluno);
    } else {
      this.alunoService.adicionarAluno(this.aluno);
    }
    this.router.navigate(['/alunos']);
  }

  cancelar() {
    this.router.navigate(['/alunos']);
  }
}
