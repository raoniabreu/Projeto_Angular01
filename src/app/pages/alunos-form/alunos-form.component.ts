import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService, Aluno } from '../../services/aluno.service';
@Component({
  standalone: true,
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css'],
  imports: [CommonModule, FormsModule]
})
export class AlunosFormComponent {
  aluno: Aluno = { id: 0, nome: '', idade: 0 };
  editando = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunoService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const alunoExistente = this.alunoService.getAlunoPorId(id);
      if (alunoExistente) {
        this.aluno = { ...alunoExistente };
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
    this.router.navigate(['/']);
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}
