import { ProfessoresService } from './professores.service';
import { Component, OnInit } from '@angular/core';

export interface Prof {
  matricula: string;
  nome: string;
  email: string;
}

const ELEMENT_DATA: Prof[] = [
  {matricula: '123', nome: 'Mariana', email: 'asd@gmail.com'},
  {matricula: '345', nome: 'Felipe', email: 'qwe@gmail.com'}
]

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  displayedColumns: string[] = ['matricula', 'nome', 'email'];
  dataSource = ELEMENT_DATA;
  flag: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  selecionarLinha(prof: any){
    console.log(prof.nome);
    this.flag = !this.flag;
  }
}
