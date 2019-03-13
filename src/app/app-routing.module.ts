import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
  { path: 'disciplina', component: DisciplinaComponent },
  { path: 'professores', component: ProfessoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
