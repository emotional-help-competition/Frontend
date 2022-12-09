import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/core/spinner.service';
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
  constructor(private testService: TestService,
    public spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.open()
    this.sub = this.testService.getQuizzes().subscribe(res=>{
      this.quizzes = res;
      this.spinnerService.close()
    });
  }
  ngOnDestroy(): void {
    if(this.sub) this.sub.unsubscribe();
  }
}
