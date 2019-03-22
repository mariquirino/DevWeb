import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Disciplina } from './disciplina';


const API = 'http://localhost:8080/disciplina';
@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  insert(disc: Disciplina){
    this.http.post<Disciplina>(API + '/inserir', disc).subscribe(function() {
      console.log('Disciplina cadastrada com sucesso!');
      window.location.reload();
    });
  }
  
  // update(disc: Disciplina, key: string){
  //   this.db.list('disciplina').update(key, disc)
  //   .catch((error: any) => {
  //     console.error(error);
  //   });
  // }

  getAll(){
    return this.http.get<Disciplina[]>(API + '/listar');
  }

  // delete(key: string){
  //   this.db.object('disciplina/${key}').remove();
  // }
}
