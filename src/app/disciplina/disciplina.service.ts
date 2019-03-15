import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Disciplina } from './disciplina';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  insert(disc: Disciplina){
    this.db.list('disciplina').push(disc)
    .then((result: any) => {
      console.log(result.key);
    });
  }
  
  update(disc: Disciplina, key: string){
    this.db.list('disciplina').update(key, disc)
    .catch((error: any) => {
      console.error(error);
    });
  }

  getAll(){
    return this.db.list('disciplina')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }

  delete(key: string){
    this.db.object('disciplina/${key}').remove();
  }
}
