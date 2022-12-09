import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }, 
  { path: 'quizz/:id', loadChildren: () => import('./features/test/test.module').then(m => m.TestModule) }, 
  { path: 'result/:id', loadChildren: () => import('./features/result/result.module').then(m => m.ResultModule) },
  { path: 'quizzes', loadChildren: () => import('./features/quizz/quizz.module').then(m => m.QuizzModule) }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
