import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfessoresService } from './professores.service';

// export interface Prof {
//   matricula: string;
//   nome: string;
//   email: string;
//   foto: string;
// }

// const ELEMENT_DATA: Prof[] = [
//   {matricula: '123', nome: 'Mariana Quirino', email: 'asd@gmail.com', foto: 'employee'},
//   {matricula: '456', nome: 'Felipe Santana', email: 'qwe@gmail.com', foto: 'man'}
// ]

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  obs: Observable<any>;
  professores: Observable<any>;
  // dataSource = ELEMENT_DATA;

  constructor(private router: Router, private profService: ProfessoresService) { }

  ngOnInit() {
    this.obs = this.profService.getAll();
    this.obs.subscribe(res => this.professores = res);
    console.log(this.professores);
  }

  selecionarLinha(prof: any){
    // console.log(prof.nome);
    this.profService.changeMessage(prof);
    this.router.navigate(['disciplina']);
  }
}
