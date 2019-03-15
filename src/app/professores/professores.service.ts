import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Professores } from './professores';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }

  insert(prof: Professores){
    this.db.list('professor').push(prof)
    .then((result: any) => {
      console.log(result.key);
    });
  }
  
  update(prof: Professores, key: string){
    this.db.list('professor').update(key, prof)
    .catch((error: any) => {
      console.error(error);
    });
  }

  getAll(){
    return this.db.list('professor')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }

  delete(key: string){
    this.db.object('professor/${key}').remove();
  }
}