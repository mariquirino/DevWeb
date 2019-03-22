import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfDisc } from './prof-disc';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';


const APIProf = 'http://localhost:8080/professores';
const APIDisc = 'http://localhost:8080/disciplina';
@Injectable({
  providedIn: 'root'
})
export class ProfDiscService {

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  insert(profDisc: ProfDisc){
    this.db.list('prof_disc').push(profDisc)
    .then((result: any) => {
      console.log(result.key);
    });
  }
  
  update(profDisc: ProfDisc, key: string){
    this.db.list('prof_disc').update(key, profDisc)
    .catch((error: any) => {
      console.error(error);
    });
  }

  getAll(){
    return this.db.list('prof_disc')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }

  delete(key: string){
    this.db.object('prof_disc/${key}').remove();
  }
}
