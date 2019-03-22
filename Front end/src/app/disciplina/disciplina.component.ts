import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Disciplina } from './disciplina';
import { Observable } from 'rxjs';
import { ProfessoresService } from '../professores/professores.service';
import { Professores } from '../professores/professores';

@Component({
  selector: 'app-disciplina',
  // template: '{{message}}',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  message: any;
  result: Disciplina[] = [];

  constructor(private router: Router, private profService: ProfessoresService) { }

  ngOnInit() {
    this.profService.currentMessage.subscribe(message => {
      this.message = message;
      this.message.disciplinas.forEach( element => {
          this.result.push(element);
    });
  });
  }
}
