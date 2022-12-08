import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzComponent } from './quizz.component';

const routes: Routes = [{ path: '', component: QuizzComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzRoutingModule { }
