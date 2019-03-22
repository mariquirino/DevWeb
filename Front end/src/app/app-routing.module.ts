import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { ProfessoresComponent } from './professores/professores.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'disciplina', component: DisciplinaComponent },
  { path: 'professores', component: ProfessoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
