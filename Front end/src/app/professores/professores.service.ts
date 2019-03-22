import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Professores } from './professores';

const API = 'http://localhost:8080/professores';
@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }

  insert(prof: Professores){
    this.http.post<Professores>(API + '/inserir', prof).subscribe(function() {
      console.log('Professor cadastrado com sucesso!');
      window.location.reload();
    });
  }
  
  // update(prof: Professores, key: string){
  //   this.db.list('professor').update(key, prof)
  //   .catch((error: any) => {
  //     console.error(error);
  //   });
  // }

  getAll(){
    return this.http.get<Professores[]>(API + '/listar');
  }

  // delete(key: string){
  //   this.db.object('professor/${key}').remove();
  // }
}