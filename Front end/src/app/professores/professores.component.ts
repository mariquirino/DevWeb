import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfessoresService } from './professores.service';
import { Professores } from './professores';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  professores: Professores[];

  constructor(private router: Router, private profService: ProfessoresService) { }

  ngOnInit() {
    this.profService.getAll().subscribe(res => this.professores = res);
  }

  selecionarLinha(prof: any){
    console.log(prof.nome);
    this.profService.changeMessage(prof);
    this.router.navigate(['disciplina']);
  }
}
