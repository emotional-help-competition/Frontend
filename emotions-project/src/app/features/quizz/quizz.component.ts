import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from 'src/app/core/test.service';
import { IQuizz } from 'src/app/models/question';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {
  quizzes:IQuizz[] = [];

  constructor(private testService: TestService,
    private router: Router) { }

  ngOnInit(): void {
    this.testService.getQuizz().subscribe(res=>this.quizzes = res)
  }

  quizzSelected(id:number) {
    this.router.navigate(['/test', id])
  }
}
