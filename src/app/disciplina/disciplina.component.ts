import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisciplinaService } from './disciplina.service';
import { Disciplina } from './disciplina';

// export interface Disc {
//   cod: string;
//   desc: string;
//   cred: number;
// }

// const disc: Disc[] = [
//   {cod: '1', desc: 'Eng. Soft.', cred: 4},
//   {cod: '2', desc: 'Banco de Dados', cred: 5},
//   {cod: '3', desc: 'Criptografia', cred: 6}
// ]

export interface ProfDisc {
  codDisc: string;
  matProf: string;
}

const PROF_DISC: ProfDisc[] = [
  {codDisc: '1', matProf: '123'},
  {codDisc: '2',  matProf: '456'},
  {codDisc: '3',  matProf: '456'}
]

@Component({
  selector: 'app-disciplina',
  // template: '{{message}}',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  message: any;
  // dataSource = disc;
  // profDisc = PROF_DISC;
  result: Disciplina[] = [];

  constructor(private router: Router, private discService: DisciplinaService) { }

  ngOnInit() {
    //Alterar esse codigo para buscar no banco de ProfDisc primeiro e depois o retorno buscar em Disciplina
    // this.profService.currentMessage.subscribe(message => this.message = message);
    // this.profDisc.forEach(element => {
    //   if(element.matProf == this.message.matricula){
    //     this.dataSource.forEach(disc => {
    //       if(disc.cod == element.codDisc){
    //         this.result.push(disc);
    //       }
    //     });
    //   }
    // });

  }

}
