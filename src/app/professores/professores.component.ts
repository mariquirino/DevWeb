import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessoresService } from './professores.service';

export interface Prof {
  matricula: string;
  nome: string;
  email: string;
  foto: string;
}

const ELEMENT_DATA: Prof[] = [
  {matricula: '123', nome: 'Mariana Quirino', email: 'asd@gmail.com', foto: 'employee'},
  {matricula: '456', nome: 'Felipe Santana', email: 'qwe@gmail.com', foto: 'man'}
]

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  // displayedColumns: string[] = ['matricula', 'nome', 'email'];
  dataSource = ELEMENT_DATA;
  
  // flag: boolean = false;

  constructor(private router: Router, private prof: ProfessoresService) { }

  ngOnInit() {
  }

  selecionarLinha(prof: any){
    // console.log(prof.nome);
    // this.flag = !this.flag;
    this.prof.changeMessage(prof);
    this.router.navigate(['disciplina']);
  }
}
