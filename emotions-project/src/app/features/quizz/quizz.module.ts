import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzRoutingModule } from './quizz-routing.module';
import { QuizzComponent } from './quizz.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    QuizzComponent
  ],
  imports: [
    CommonModule,
    QuizzRoutingModule,
    SharedModule
  ]
})
export class QuizzModule { }
