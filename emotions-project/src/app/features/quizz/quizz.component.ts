import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestService } from 'src/app/core/test.service';
import { IQuizz } from 'src/app/models/question';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit, OnDestroy {
  quizzes:IQuizz[] = [];
  sub!: Subscription;
  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.sub = this.testService.getQuizzes().subscribe(res=>this.quizzes = res);
  }
  ngOnDestroy(): void {
    if(this.sub) this.sub.unsubscribe();
  }
}
